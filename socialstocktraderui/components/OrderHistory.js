// src/components/OrderHistory.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Define the prop types for the orders
const OrderHistory = ({ orders }) => {
  if (orders.length === 0) {
    return <p>No orders found.</p>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Order ID</strong></TableCell>
            <TableCell><strong>Symbol</strong></TableCell>
            <TableCell><strong>Quantity</strong></TableCell>
            <TableCell><strong>Filled Quantity</strong></TableCell>
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
              <TableCell>{order.filled_qty}</TableCell>
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

