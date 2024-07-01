require('dotenv').config();
const Alpaca = require('@alpacahq/alpaca-trade-api');

// Set up Alpaca API client
const alpaca = new Alpaca({
  keyId: process.env.APCA_API_KEY_ID,
  secretKey: process.env.APCA_API_SECRET_KEY,
  paper: true, // Use paper trading environment
  usePolygon: false
});

// Export the Alpaca client for use in other files
module.exports = alpaca;
