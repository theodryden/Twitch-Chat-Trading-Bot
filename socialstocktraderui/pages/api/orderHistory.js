import axios from 'axios';

export const fetchOrderHistory = async () => {
  const apiKey = process.env.ALPACA_API_KEY_ID;  // Get your API Key from environment variables
  const apiSecret = process.env.ALPACA_API_SECRET_KEY;  // Get your API Secret from environment variables

  if (!apiKey || !apiSecret) {
    console.error('API Key or Secret is missing!');
    return [];
  }

  console.log('API Key:', apiKey);  // Log API Key
  console.log('API Secret:', apiSecret);  // Log API Secret

  try {
    const response = await axios.get('https://paper-api.alpaca.markets/v2/orders', {
      headers: {
        accept: 'application/json',
        'APCA-API-KEY-ID': apiKey,
        'APCA-API-SECRET-KEY': apiSecret,
      },
      params: {
        status: 'all',  // Fetch orders with all statuses
      },
    });

    console.log('Response Status:', response.status);  // Log the response status
    console.log('Response Headers:', response.headers);  // Log the response headers
    console.log('Fetched order history:', response.data);  // Log the fetched data

    return response.data;  // Return the order history data
  } catch (error) {
    if (error.response) {
      // If the error response exists, log the status and data
      console.error('Error Response Status:', error.response.status);
      console.error('Error Response Data:', error.response.data);
    } else {
      // If no response exists, log the error message
      console.error('Error Message:', error.message);
    }
    return [];
  }
};

