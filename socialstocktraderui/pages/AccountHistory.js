// src/pages/AccountHistory.js
import React, { useState, useEffect } from 'react';
import OrderHistory from '../components/OrderHistory';
import { fetchOrderHistory } from './api/orderHistory';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/AccountHistory.module.css'

const AccountHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrderHistory = async () => {
      const orderData = await fetchOrderHistory();
      setOrders(orderData);
    };

    getOrderHistory();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className={styles.AccountHistory}>Account History</h1>
      <OrderHistory orders={orders} />
      <p></p>
      <Footer />
    </div>
  );
};

export default AccountHistory;
