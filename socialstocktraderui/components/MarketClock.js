import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import styles from './PLLineChart.module.css'

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
    <div>
      <h2 className={styles.PLLineChart}>Market Clock</h2>
      <p><strong>Current Timestamp:</strong> {format(new Date(timestamp), 'yyyy-MM-dd HH:mm:ss')}</p>
      <p><strong>Market Open:</strong> {is_open ? 'Yes' : 'No'}</p>
      <p><strong>Next Open:</strong> {format(new Date(next_open), 'yyyy-MM-dd HH:mm:ss')}</p>
    </div>
  );
};

export default MarketClock;
