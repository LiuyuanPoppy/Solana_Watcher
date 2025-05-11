const { Client, ActivityType } = require('discord.js');
const { Connection, PublicKey } = require('@solana/web3.js');
const { getAccount, getMint } = require('@solana/spl-token');
const axios = require('axios');
require('dotenv').config();

const client = new Client({ 
  intents: ['Guilds'] 
});

const SOLANA_CONNECTION = new Connection('https://api.mainnet-beta.solana.com');
const SWITCH_DELAY = 15000; // 15 seconds
const RETRY_DELAY = 30000; // 30 seconds
const TOKENS = {
  SOL: { decimals: 9 },
  USDC: { mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', decimals: 6 },
  USDT: { mint: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB', decimals: 6 }
};

let currentTokenIndex = 0;

async function updatePresence(balance, symbol) {
  client.user.setPresence({
    activities: [{
      name: `${balance} ${symbol}`,
      type: ActivityType.Watching
    }],
    status: 'dnd'
  });
}

async function fetchNativeBalance() {
  try {
    const balance = await SOLANA_CONNECTION.getBalance(new PublicKey(process.env.ADDRESS));
    const solBalance = (balance / 10 ** TOKENS.SOL.decimals).toFixed(2);
    await updatePresence(solBalance, 'SOL');
    console.log(`Updated SOL balance: ${solBalance}`);
  } catch (error) {
    console.error('SOL Balance Error:', error.message);
    setTimeout(fetchNativeBalance, RETRY_DELAY);
    return;
  }
  scheduleNextUpdate();
}

async function fetchTokenBalance(mintAddress, decimals, symbol) {
  try {
    const tokenAccounts = await SOLANA_CONNECTION.getTokenAccountsByOwner(
      new PublicKey(process.env.ADDRESS),
      { mint: new PublicKey(mintAddress) }
    );

    const totalBalance = tokenAccounts.value.reduce((acc, { account }) => {
      const accountInfo = getAccount(account);
      return acc + Number(accountInfo.amount);
    }, 0);

    const formattedBalance = (totalBalance / 10 ** decimals).toFixed(2);
    await updatePresence(formattedBalance, symbol);
    console.log(`Updated ${symbol} balance: ${formattedBalance}`);
  } catch (error) {
    console.error(`${symbol} Balance Error:`, error.message);
    setTimeout(() => fetchTokenBalance(mintAddress, decimals, symbol), RETRY_DELAY);
    return;
  }
  scheduleNextUpdate();
}

function scheduleNextUpdate() {
  currentTokenIndex = (currentTokenIndex + 1) % Object.keys(TOKENS).length;
  const nextToken = Object.values(TOKENS)[currentTokenIndex];
  
  setTimeout(() => {
    if (nextToken.mint) {
      fetchTokenBalance(nextToken.mint, nextToken.decimals, Object.keys(TOKENS)[currentTokenIndex]);
    } else {
      fetchNativeBalance();
    }
  }, SWITCH_DELAY);
}

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  fetchNativeBalance();
});

client.login(process.env.TOKEN);
