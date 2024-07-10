import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import styles from '../components/OrderHistory.module.css';

const OrderHistory = ({ orders }) => {
  console.log('Orders:', orders); // Log orders to see what is being passed to the component

  if (!orders || orders.length === 0) {
    return <p>No orders found.</p>;
  } 

  return (
    <TableContainer component={Paper} className={styles.OrderHistory}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Order ID</strong></TableCell>
            <TableCell><strong>Symbol</strong></TableCell>
            <TableCell><strong>Quantity</strong></TableCell>
            <TableCell><strong>Direction</strong></TableCell>
            <TableCell><strong>Average Filled Price</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(order => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.symbol}</TableCell>
              <TableCell>{order.qty}</TableCell>
              <TableCell>{order.side}</TableCell>
              <TableCell>${order.filled_avg_price}</TableCell>
              <TableCell>{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderHistory;


