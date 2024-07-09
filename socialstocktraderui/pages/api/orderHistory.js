// src/api/orderHistory.js

export const fetchOrderHistory = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'APCA-API-KEY-ID': 'PKIPOJYZOG8ZA2QFTMO8',
        'APCA-API-SECRET-KEY': 'GOR6pfbYHgn5iTlPVGeBfpc5SJYXLpGet8z6swl3',
      },
    };
  
    try {
      const response = await fetch('https://paper-api.alpaca.markets/v2/orders?status=all', options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching order history:', error);
      return [];
    }
  };
  