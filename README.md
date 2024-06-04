# Web Metamask Sweeper Bot

Web Metamask Sweeper Bot is a web-based application that automates the process of transferring and burning funds from a target wallet to a specified recipient address. The bot leverages the power of the ethers.js library to interact with the Ethereum blockchain and other compatible networks.

## **Features**

- Start and stop the bot using terminal commands or buttons.
- Monitor and log the bot's activity in a terminal-like interface.
- Configure bot settings via a modal form.
- Send periodic status updates and transaction notifications to a specified Telegram account.
- Dynamically set bot parameters via URL.

## **Getting Started**

### Prerequisites

- A web server to serve the HTML file.

## 1. Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/web-metamask-sweeper-bot.git
   cd web-metamask-sweeper-bot
   ```

## 2. Running the Bot

1. **Start a local web server:**
    <br>
    You can use any web server to serve the `index.html` file. For example, using the Live Server extension in VS Code:

    - Open the project folder in VS Code.
    - Right-click on `index.html` and select "Open with Live Server".

    <br>
2. **Open the application in your browser:**
    <br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   The application will open in your default web browser, displaying the terminal interface and control buttons.

## 3. Configuration

1. **Configure Bot Settings:**

    - Click on the "Bot Settings" button.
    - Fill in the required fields (RPC URL, Target Wallet Private Key, Recipient Wallet Address, Telegram User ID, Telegram Bot Token, Network Name).
    - Optional parameters: Extra Gas Fee and Extra Gas Limit.
    - Click "Save" to save the settings.

1. **Start the Bot:**
    - Click the "Start" button or type start in the terminal input and press Enter.
    - The bot will start monitoring blocks and transferring funds as configured.

<br>

## Terminal Commands
- `help:` Display a list of available commands.
- `start:` Start the bot.
- `stop:` Stop the bot.
- `status:` Display the current status of the bot.
- `clear:` Clear the terminal output.

## URL Parameters
You can set bot parameters dynamically via URL query parameters. For example:

```http://localhost:5500/index.html?network_rpc_url=YOUR_RPC_URL&target_wallet_private_key=YOUR_PRIVATE_KEY&recipient_address=YOUR_RECIPIENT_ADDRESS&your_telegram_user_id=YOUR_TELEGRAM_USER_ID&your_telegram_bot_token=YOUR_TELEGRAM_BOT_TOKEN&network_name=YOUR_NETWORK_NAME&extra_gas_fee=EXTRA_GAS_FEE&extra_gas_limit=EXTRA_GAS_LIMIT```

<br>
If all parameters are present in the URL, you will be prompted to start the bot automatically.

<br>

## Security Considerations

- **Private Key Security:** Never expose your private key. Ensure the application is served over a secure connection.
- **RPC URL:** Use a trusted RPC provider to avoid potential security risks.

## Contributing
<br>
Contributions are welcome! Please fork the repository and submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.


## Acknowledgments
- Thanks to the ethers.js library for providing a robust framework for interacting with the Ethereum blockchain.


<br>
<br>
<br>
For any questions or issues, please open an issue on the GitHub repository.

Happy coding! 🎉
