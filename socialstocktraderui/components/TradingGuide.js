// src/components/TradingGuide.js
import React from 'react';
import styles from './tradingguide.module.css'

const TradingGuide = () => {
  return (

    <div className={styles.TradingGuide}>
      <h2>Trading Guide</h2>

      <p><strong>Summary</strong></p>
      <p>Gone are the days when you had a sixth-sense that a company's share price was about to sky rocket but you had no-one to share your investing idea with.</p>
      <p>YAFA is your own community managed EQUITY portfolio.</p>

      <p><strong>Do I need anything to participate?</strong></p>
      <p>You will need a Twitch account to send messages in the Twitch chat</p>

      <p><strong>How do I make a Twitch account?</strong></p>
      <p>Follow this guide</p>

      <p><strong>How do I place a trade?</strong></p>
      <p><code>!trade Direction Stock-Symbol Quantity</code></p>
      <p><code>Example: !trade buy MSFT 100</code></p>
      <p><code>Example: !trade sell MSFT 100</code></p>

      <p><strong>How do I know if the trade was successful?</strong></p>
      <p>Check the pie chart on the homepage for your trade!</p>
   
      <p><strong>Which stocks should I choose?</strong></p>
      <ul>
        <li>1. Pick a stock you think will go up in value</li>
        <li>2. Place your trade through the Twitch Chat</li>
        <li>3. Let the community know your thoughts and rationale.</li>
        <li>4. Enjoy the ride upwards or sell the stock </li>
      </ul>

      <p><strong>Do you have examples of any stock symbols I could use?</strong></p>
      <p>It is encouraged you do your own research however, see below for a list of well known stocks and their corresponding symbols</p>

    </div>
  );
};

export default TradingGuide;
