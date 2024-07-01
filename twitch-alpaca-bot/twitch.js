require('dotenv').config();
const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: 'theodrydentech',
    password: process.env.TWITCH_OAUTH_TOKEN
  },
  channels: [
    process.env.TWITCH_CHANNEL
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Export the client for use in other files
module.exports = client;