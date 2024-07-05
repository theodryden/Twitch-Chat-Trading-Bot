import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from './PLLineChart.module.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PLLineChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchPLData = async () => {
      try {
        const response = await axios.get('/api/pl');
        const { timestamp, profit_loss } = response.data;

        const formattedData = {
          labels: timestamp.map(ts => new Date(ts * 1000).toLocaleDateString()),
          datasets: [
            {
              label: 'Profit/Loss',
              data: profit_loss,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
          ],
        };

        setChartData(formattedData);
      } catch (error) {
        console.error('Error fetching P/L data:', error);
      }
    };

    fetchPLData();
  }, []);

  if (!chartData) {
    return <p>Loading chart data...</p>;
  }

  return (
    <div>
      <h2 className={styles.PLLineChart}>Daily Profit/Loss</h2>
      <Line data={chartData} />
    </div>
  );
};

export default PLLineChart;
