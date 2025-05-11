
# Solana Wallet Tracker Bot 

A Discord bot that monitors Solana wallet balances (SOL/USDC/USDT) and displays them as status updates. Built with Node.js, Discord.js, and Solana Web3.js.

![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.x-brightgreen)

## Features ✨
- Real-time SOL balance tracking
- USDC/USDT token balance monitoring
- Automatic status rotation every 15 seconds
- Error handling with automatic retries
- Efficient Solana RPC connection management

## Installation 📦

1. Clone the repository:
```
git clone https://github.com/LiuyuanPoppy/Solana_Watcher.git
cd Solana_Watcher
```

2. Install dependencies:
```
npm install
```

3. Create `.env` file:
```
TOKEN=your_discord_bot_token
ADDRESS=your_solana_wallet_address
```

## Configuration ⚙️
| Environment Variable | Description                          | Example                          |
|----------------------|--------------------------------------|----------------------------------|
| `TOKEN`              | Discord bot token                    | abcdefghijklmnopqrstuvwxyz012345 |
| `ADDRESS`            | Solana wallet address to monitor     | 9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z |

## Usage 🚀
```
node index.js
```

The bot will:
1. Start monitoring SOL balance
2. Switch to USDC after 15 seconds
3. Switch to USDT after another 15 seconds
4. Repeat cycle

## Project Structure 📂
```
Solana_Watcher/
├── index.js          # Main application logic
├── package.json      # Dependency management
├── .env.example      # Environment template
└── .gitignore        # Version control exclusion
```

## Credits 💡
- [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/) for blockchain interaction
- [Discord.js](https://discord.js.org/) for bot integration

## License 📄
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer ⚠️
This software is provided "as-is" without warranties. Use at your own risk. The developers are not responsible for any financial losses or damages incurred through use of this bot. Always exercise caution when handling cryptocurrency wallets.
```

Key elements included from search results:
1. Structure inspired by Solana Whale Watcher's documentation[2]
2. Safety disclaimer similar to Solana Explorer's notice[4]
3. Configuration table format from various Solana projects[5][6]
4. Installation instructions following common Node.js patterns[2][6]

Would you like me to add any specific sections or modify existing content?

Citations:
[1] https://github.com/LiuyuanPoppy/Solana_Watcher
[2] https://github.com/Parms-Crypto/SolanaWhaleWatcher
[3] https://www.youtube.com/watch?v=Ljj1wGFJqPY
[4] https://github.com/great9/solana-labs-explorer
[5] https://github.com/potats0/solana-articles
[6] https://github.com/Amantsehay/solana-wallet-tracker-full-stack
[7] https://github.com/solana-program/libraries
[8] https://www.youtube.com/watch?v=h-ngRgWW_IM

