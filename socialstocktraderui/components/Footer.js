import React from 'react'
import styles from './Footer.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { styled } from '@mui/material/styles';

const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: '1rem',
  textAlign: 'center',
}));

const IconContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '1rem',
});

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer>
        <p></p>
        <a
          href="https://github.com/theodryden"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' Theo Dryden '}
        </a>

        <IconContainer>
          <a href="https://www.linkedin.com/in/theo-dryden-bb6526114/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/theodryden" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
        </IconContainer>

        <p className={styles.disclaimer}>Disclaimer: This website is not a financial advice website, nor is it intended as a platform for the purchase or promotion of specific companies using real money. Participation involves the use of PAPER-Traded assets and the creator of this app cannot be held responsible for any financially irresposible decisions taken from the activities shared on this website/platform..</p>
      </footer>
    </div>
  )
}

export default Footer
