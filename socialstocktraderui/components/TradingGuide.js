// src/components/TradingGuide.js
import React from 'react';
import styles from './tradingguide.module.css'

const TradingGuide = () => {
  return (

    <div className={styles.TradingGuide}>
      <h1>Trading Guide</h1>

      <h2><strong>Summary</strong></h2>
      <p>Gone are the days when you had a sixth-sense that a company's share price was about to sky rocket but you had no-one to share your investing idea with.</p>
      <p>YAFA is your own community managed EQUITY portfolio.</p>

      <h3><strong>Do I need anything to participate?</strong></h3>
      <p>You will need a Twitch account to send messages in the Twitch chat</p>

      <h3><strong>How do I make a Twitch account?</strong></h3>
      <p>Follow this guide</p>

      <h3><strong>How do I place a trade?</strong></h3>
      <p><code>!trade Direction Stock-Symbol Quantity</code></p>
      <p><code>Example: !trade buy MSFT 100</code></p>
      <p><code>Example: !trade sell MSFT 100</code></p>

      <h3><strong>How do I know if the trade was successful?</strong></h3>
      <p>Check the pie chart on the homepage for your trade!</p>
   
      <h3><strong>Do you have examples of any stock symbols I could use?</strong></h3>
      <p>It is encouraged you do your own research however, see below for a list of well known stocks and their corresponding symbols</p>

    </div>
  );
};

export default TradingGuide;
