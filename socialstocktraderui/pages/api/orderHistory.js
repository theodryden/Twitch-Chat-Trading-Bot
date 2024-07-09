

export const fetchOrderHistory = async () => {
  const options = {
      method: 'GET',
      headers: {
          accept: 'application/json',
          'APCA-API-KEY-ID': process.env.ALPACA_API_KEY_ID, // Use environment variable
          'APCA-API-SECRET-KEY': process.env.ALPACA_API_SECRET_KEY, // Use environment variable
      },
  };

  try {
      const response = await fetch('https://paper-api.alpaca.markets/v2/orders?status=all', options);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching order history:', error);
      return [];
  }
};
