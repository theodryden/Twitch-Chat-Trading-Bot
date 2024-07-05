import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://paper-api.alpaca.markets/v2/account', {
      headers: {
        accept: 'application/json',
        'APCA-API-KEY-ID': process.env.ALPACA_API_KEY_ID,
        'APCA-API-SECRET-KEY': process.env.ALPACA_API_SECRET_KEY,
      },
    });

    const { portfolio_value, cash } = response.data;
    res.status(200).json({ portfolio_value, cash });
  } catch (error) {
    console.error('Error fetching Alpaca account data:', error.message);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}



