import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer>
        <a
          href="https://github.com/theodryden"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' Theo Dryden '}
        </a>

        <p className={styles.disclaimer}>Disclaimer: This website is not a financial advice website, nor is it intended as a platform for the purchase or promotion of specific companies using real money. Participation involves the use of PAPER-Traded assets and the creator of this app cannot be held responsible for any financially irresposible decisions taken from the activities shared on this website/platform..</p>
      </footer>
    </div>
  )
}

export default Footer
