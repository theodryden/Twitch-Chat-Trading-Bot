// src/components/StockTables.js
import React from 'react';
import styles from './stocktable.module.css';

const StockTables = () => {
  const americanStocks = [
    { symbol: 'MSFT', name: 'MICROSOFT CORPORATION' },
    { symbol: 'AAPL', name: 'APPLE INC.' },
    { symbol: 'NVDA', name: 'NVIDIA CORPORATION' },
    { symbol: 'GOOG', name: 'ALPHABET INC.' },
    { symbol: 'AMZN', name: 'AMAZON.COM, INC.' },
    { symbol: 'META', name: 'META PLATFORMS, INC.' },
    { symbol: 'TSLA', name: 'TESLA, INC.' },
    { symbol: 'AMD', name: 'ADVANCED MICRO DEVICES, INC.' },
    { symbol: 'CRM', name: 'SALESFORCE, INC.' },
    { symbol: 'BABA', name: 'ALIBABA GROUP HOLDING LIMITED' },
    { symbol: 'INTC', name: 'INTEL CORPORATION' },
    { symbol: 'PYPL', name: 'PAYPAL HOLDINGS, INC.' }
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
    <> 
    <div className={styles.tableContainerMain}>
    <div className={styles.container}>
      <div className={styles.tables}>
        <div className={styles.tableContainer1}>
          <h2>American Stocks</h2>
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Company Name</th>
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
        <div className={styles.tableContainer2}>
          <h2>British Stocks</h2>
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Company Name</th>
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
    </div>
    </>
  );
};

export default StockTables;
