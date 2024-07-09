// src/components/TradingGuide.js
import React from 'react';
import styles from './tradingguide.module.css'

const TradingGuide = () => {
  return (

    <div className={styles.TradingGuide}>
      <h1>Trading Guide</h1>

      <h2><strong>Purpose</strong></h2>
      <p>Gone are the days when you had a sixth-sense that a company's share price was about to sky rocket but you had no-one to share your investing idea with.</p>
      <p>This is a community managed equities portfolio.</p>
      <p>Go find some stocks!</p>

      <h3><strong>Do I need anything to participate?</strong></h3>
      <p>You will need a <a href='https://www.twitch.tv/signup'>Twitch account</a> to send messages in the Twitch chat</p>

      <h3><strong>How do I make a Twitch account?</strong></h3>
      <p>Follow this <a href='https://help.twitch.tv/s/article/creating-an-account-with-twitch?language=en_US#Desktop'>guide</a></p>

      <h3><strong>Where do I place my trades?</strong></h3>
      <p>1. Sign into your Twitch account</p>
      <p>2. Navigate to <a href='https://www.twitch.tv/theodrydentech'>https://www.twitch.tv/theodrydentech</a></p>
      <p>3. Open the Stream Chat on theodrydentech</p>
      <p>4. Enter your trade in the Stream Chat</p>
      <p>(You can still place trades when Theo isn't streaming!)</p>

      <h3><strong>How do I place a trade in the Twitch Stream Chat?</strong></h3>
      <p><code>!trade Direction Stock-Symbol Quantity</code></p>
      <p><code>Example: !trade buy MSFT 100</code></p>
      <p><code>Example: !trade sell MSFT 100</code></p>

      <h3><strong>How do I know if the trade was successful?</strong></h3>
      <p>Check the pie chart on <a href='/'>Home </a> or the <a href='AccountHistory'>Account History</a> for your trade!</p>
   
      <h3><strong>Do you have examples of any stock symbols I could use?</strong></h3>
      <p>It is encouraged you do your own research however, see below for a list of well known stocks and their corresponding symbols</p>

    </div>
  );
};

export default TradingGuide;
