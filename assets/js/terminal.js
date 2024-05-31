let terminal_name = 'sweeperbot@terminal:~$';

document.addEventListener('DOMContentLoaded', function () {
  let terminal_first_time_start = true;

  const inputElement = document.getElementById('terminal-input');
  const outputElement = document.getElementById('terminal-output');

  inputElement.addEventListener('keydown', function (event) {
    commondEnter(event);
  });

  function commondEnter(event) {
    if (event.key === 'Enter') {
      const command = inputElement.value.trim();

      if (command == '' || command == undefined || command == null) {
        return;
      }

      if (terminal_first_time_start) {
        outputElement.innerHTML = `<div><span class="prompt">${terminal_name}</span> ${command}</div>`;
        terminal_first_time_start = false;
      } else {
        outputElement.innerHTML += `<div><span class="prompt">${terminal_name}</span> ${command}</div>`;
      }

      inputElement.value = '';
      handleCommand(command, false);
    }
  }

  function handleCommand(command, commond_check) {
    let output;
    switch (command.trim()) {
      case 'help':
        output = 'Available commands: help, start, stop, status, clear';
        break;
      case 'start':
        output = 'Sweeper Bot started.';
        break;
      case 'stop':
        output = 'Sweeper Bot stopped.';
        break;
      case 'status':
        output = 'Sweeper Bot is currently idle.';
        break;
      case 'clear':
        outputElement.innerHTML = '';
        return;
      default:
        output = `command not found: ${command}`;
    }

    if (commond_check) {
      if (terminal_first_time_start) {
        outputElement.innerHTML = `<div><span class="prompt">${terminal_name}</span> ${command}</div>`;
      } else {
        outputElement.innerHTML += `<div><span class="prompt">${terminal_name}</span> ${command}</div>`;
      }
      terminal_first_time_start = false;
    }

    outputElement.innerHTML += `<div>&nbsp; ${output}</div>`;
    outputElement.scrollTop = outputElement.scrollHeight;
  }

  document.getElementById('start-btn').addEventListener('click', function () {
    handleCommand('start', true);
  });

  document.getElementById('stop-btn').addEventListener('click', function () {
    handleCommand('stop', true);
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
    console.log('Settings Saved:', settingsData);
    modal.style.display = 'none';
  });

});