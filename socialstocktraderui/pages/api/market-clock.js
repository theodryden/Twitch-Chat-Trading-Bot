import axios from 'axios';

export default async function handler(req, res) {
  try {
    if (!process.env.ALPACA_API_KEY_ID || !process.env.ALPACA_API_SECRET_KEY) {
      throw new Error('API keys are not set in environment variables.');
    }

    const response = await axios.get('https://paper-api.alpaca.markets/v2/clock', {
      headers: {
        accept: 'application/json',
        'APCA-API-KEY-ID': process.env.ALPACA_API_KEY_ID,
        'APCA-API-SECRET-KEY': process.env.ALPACA_API_SECRET_KEY,
      },
    });

    // Extract relevant data
    const { timestamp, is_open, next_open } = response.data;

    res.status(200).json({ timestamp, is_open, next_open });
  } catch (error) {
    console.error('Error fetching Alpaca market clock data:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ error: error.response?.data || error.message });
  }
}
