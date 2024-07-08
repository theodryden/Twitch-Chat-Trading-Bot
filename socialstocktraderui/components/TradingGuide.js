// src/components/TradingGuide.js
import React from 'react';
import styles from './tradingguide.module.css'

const TradingGuide = () => {
  return (
    <div className={styles.TradingGuide}>
      <h2>Trading Guide</h2>

      <p><strong>What do I need to do to place a trade?</strong></p>
      <p>You will need a Twitch account</p>

      <p><strong>Where/How do I place a trade?</strong></p>
      <p>Place them by sending a message in my Twitch Chat</p>

      <p><strong>How to Make a Twitch account?</strong></p>
      <p>Follow this guide</p>

      <p><strong>How do I know if the trade was successful?</strong></p>
      <p>Check the pie chart on the homepage for your trade!</p>

      <p><strong>How to place a trade?</strong></p>
      <p><code>!trade Direction Stock-Symbol Quantity</code></p>
      <p><code>Example: !trade buy MSFT 100</code></p>

      <p><strong>What stocks should I choose?</strong></p>
      <ul>
        <li>1. Pick a stock you think will go up in value</li>
        <li>2. Sell a stock you think will go down in value very soon</li>
      </ul>

      <p><strong>Do you have examples of stocks/symbols to buy/sell?</strong></p>
      <p>See below</p>
    </div>
  );
};

export default TradingGuide;
