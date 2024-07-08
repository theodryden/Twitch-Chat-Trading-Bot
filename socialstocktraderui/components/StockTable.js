// src/components/StockTables.js

import React from 'react';
import styles from './stocktable.module.css';

const StockTables = () => {
  const americanStocks = [
    { symbol: 'MSFT', name: 'Microsoft Corporation' },
    { symbol: 'AAPL', name: 'Apple Inc.' },
    { symbol: 'NVDA', name: 'NVIDIA Corporation' },
    { symbol: 'GOOG', name: 'Alphabet Inc.' },
    { symbol: 'AMZN', name: 'Amazon.com, Inc.' },
    { symbol: 'META', name: 'Meta Platforms, Inc.' },
    { symbol: 'TSLA', name: 'Tesla, Inc.' },
    { symbol: 'AMD', name: 'Advanced Micro Devices, Inc.' },
    { symbol: 'CRM', name: 'Salesforce, Inc.' },
    { symbol: 'BABA', name: 'Alibaba Group Holding Limited' },
    { symbol: 'INTC', name: 'Intel Corporation' },
    { symbol: 'PYPL', name: 'PayPal Holdings, Inc.' }
  ];

  const britishStocks = [
    { symbol: 'AZN', name: 'ASTRAZENECA PLC' },
    { symbol: 'SHEL', name: 'SHELL PLC' },
    { symbol: 'HSBA', name: 'HSBC HLDGS PLC' },
    { symbol: 'ULVR', name: 'UNILEVER PLC' },
    { symbol: 'BP.', name: 'BP PLC' },
    { symbol: 'RIO', name: 'RIO TINTO PLC' },
    { symbol: 'REL', name: 'RELX PLC' },
    { symbol: 'GSK', name: 'GSK PLC' },
    { symbol: 'GLEN', name: 'GLENCORE PLC' },
    { symbol: 'DGE', name: 'DIAGEO PLC' },
    { symbol: 'BATS', name: 'BRITISH AMERICAN TOBACCO PLC' },
    { symbol: 'LSEG', name: 'LONDON STOCK EXCHANGE GROUP PLC' }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tables}>
        <div className={styles.tableContainer}>
          <h2>American Stocks</h2>
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {americanStocks.map(stock => (
                <tr key={stock.symbol}>
                  <td>{stock.symbol}</td>
                  <td>{stock.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.tableContainer}>
          <h2>British Stocks</h2>
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {britishStocks.map(stock => (
                <tr key={stock.symbol}>
                  <td>{stock.symbol}</td>
                  <td>{stock.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StockTables;
