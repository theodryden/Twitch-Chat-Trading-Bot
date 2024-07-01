require('dotenv').config();
const tmi = require('tmi.js');
const Alpaca = require('@alpacahq/alpaca-trade-api');

// Configure Alpaca API
const alpaca = new Alpaca({
  keyId: process.env.APCA_API_KEY_ID,
  secretKey: process.env.APCA_API_SECRET_KEY,
  paper: true, // Use paper trading for testing
  usePolygon: false,
});

// Configure Twitch bot
const client = new tmi.Client({
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: process.env.TWITCH_BOT_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN,
  },
  channels: [process.env.TWITCH_CHANNEL],
});

// Connect to Twitch
client.connect();

// Listen for chat messages
client.on('message', (channel, tags, message, self) => {
  if (self) return;

  const tradeMatch = message.match(/!trade (buy|sell) (\w+)/i);

  if (tradeMatch) {
    const [_, action, symbol] = tradeMatch;
    executeOrder(action.toLowerCase(), symbol.toUpperCase(), 1);
  }
});

// Function to execute an order
async function executeOrder(action, symbol, quantity) {
  try {
    const order = await alpaca.createOrder({
      symbol,
      qty: quantity,
      side: action,
      type: 'market',
      time_in_force: 'gtc',
    });
    console.log(`Order executed: ${action} ${quantity} shares of ${symbol}`);
  } catch (error) {
    console.error(`Failed to execute order: ${error.message}`);
  }
}
