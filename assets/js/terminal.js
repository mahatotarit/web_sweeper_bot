let terminal_name = 'sweeperbot@terminal:~$';
let bot_status = false;

document.addEventListener('DOMContentLoaded', function () {

  const inputElement = document.getElementById('terminal-input');
  const outputElement = document.getElementById('terminal-output');

  inputElement.addEventListener('keydown', function (event) {
    commondEnter(true,event, inputElement.value);
  });

  function commondEnter(key_or_text,event,commond) {

    let text_commond = commond.trim();

    if(bot_status){

      if(event.key === 'Enter' || !key_or_text){

        if (text_commond == 'start'){
          handleCommand(text_commond);
        }else if(text_commond == 'stop'){
          handleCommand(text_commond);
        }else if(text_commond == 'clear'){
          handleCommand(text_commond);
        }

        inputElement.value = '';
      }
      
      return;
    }

    if(!key_or_text){
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
      }else if(command == 'clear'){
        inputElement.value = '';
        outputElement.innerHTML = ``;
        return;
      }

      outputElement.innerHTML += `<div>&nbsp; ${output}</div>`;
      outputElement.scrollTop = outputElement.scrollHeight;
      return;
    }

    switch (command.trim()) {
      case 'help':
        output = 'Available commands: help, start, stop, status, clear';
        break;
      case 'start':
        start_bot();
        output = 'Sweeper Bot started.';
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

    outputElement.innerHTML += `<div>&nbsp; ${output}</div>`;
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

  settingsBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  saveBtn.addEventListener('click', function () {
    const formData = new FormData(document.getElementById('settings-form'));
    const settingsData = {};
    formData.forEach((value, key) => {settingsData[key] = value;});
    modal.style.display = 'none';
    alert('Bot Details Saved');
  });



  // =========================== bot function  ============================
  function stop_bot() {
    bot_status = false;
  }
  async function start_bot(){
    bot_status = true;
  }


});