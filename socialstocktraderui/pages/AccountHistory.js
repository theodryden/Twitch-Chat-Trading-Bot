import React, { useState, useEffect } from 'react';
import OrderHistory from '../components/OrderHistory';
import { fetchOrderHistory } from './api/orderHistory'; // Adjusted path
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/AccountHistory.module.css';

const AccountHistory = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOrderHistory = async () => {
      try {
        const orderData = await fetchOrderHistory();
        setOrders(orderData);
      } catch (err) {
        setError(err.message);
      }
    };

    getOrderHistory();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className={styles.AccountHistory}>Account History</h1>
      {error ? <p>Error fetching orders: {error}</p> : <OrderHistory orders={orders} />}
      <Footer />
    </div>
  );
};

export default AccountHistory;
