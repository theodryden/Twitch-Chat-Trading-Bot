import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Link } from 'next/link';
import Navbar from '../components/Navbar';
import AccountBarChart from '../components/AccountBarChart';
import PLLineChart from '../components/PLLineChart';
import PieChart from '../components/PieChart';
import MarketClock from '../components/MarketClock';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Social Stock Trader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <div className={styles.chartContainer}>
          <AccountBarChart />
          <PLLineChart />
          <PieChart />
        </div>
        <p></p>
        <MarketClock />
        <p></p>
      </main>
      
      <Footer />

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .chartContainer {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          width: 100%;
          margin-top: 0;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 5px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
