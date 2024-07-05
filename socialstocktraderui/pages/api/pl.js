import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://paper-api.alpaca.markets/v2/account/portfolio/history', {
      headers: {
        accept: 'application/json',
        'APCA-API-KEY-ID': process.env.ALPACA_API_KEY_ID,
        'APCA-API-SECRET-KEY': process.env.ALPACA_API_SECRET_KEY,
      },
      params: {
        intraday_reporting: 'market_hours',
        pnl_reset: 'no_reset',
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching Alpaca P/L data:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ error: error.response?.data || error.message });
  }
}
