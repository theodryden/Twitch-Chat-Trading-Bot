module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/alpaca',
        destination: 'https://paper-api.alpaca.markets/v2/account',
      },
      {
        source: '/api/pl',
        destination: 'https://paper-api.alpaca.markets/v2/account/portfolio/history',
      },
    ];
  },
  env: {
    ALPACA_API_KEY_ID: process.env.ALPACA_API_KEY_ID,
    ALPACA_API_SECRET_KEY: process.env.ALPACA_API_SECRET_KEY,
  },
};

