import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import styles from './MarketClock.module.css'

const MarketClock = () => {
  const [clockData, setClockData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClockData = async () => {
      try {
        const response = await fetch('/api/market-clock');
        const data = await response.json();
        setClockData(data);
      } catch (error) {
        console.error('Error fetching market clock data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClockData();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!clockData) return <p>Error fetching data.</p>;

  const { timestamp, is_open, next_open } = clockData;

  return (
    <div className={styles.MarketClock}>
      <h2 className={styles.MarketClock}>US Market Clock</h2>
      <p className={styles.MarketClock}><strong>Current UK Timestamp:</strong> {format(new Date(timestamp), 'yyyy-MM-dd HH:mm:ss')}</p>
      <p className={styles.MarketClock}><strong>US Market Open:</strong> {is_open ? 'Yes' : 'No'}</p>
      <p className={styles.MarketClock}><strong>Next US Open:</strong> {format(new Date(next_open), 'yyyy-MM-dd HH:mm:ss')}</p>
    </div>
  );
};

export default MarketClock;
