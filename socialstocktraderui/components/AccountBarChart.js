import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from './AccountBarChart.module.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AccountBarChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const response = await axios.get('/api/alpaca');
        const { portfolio_value, cash } = response.data;

        setChartData({
          labels: ['Portfolio Value', 'Cash'],
          datasets: [
            {
              label: 'Amount in USD',
              data: [portfolio_value, cash],
              backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
              borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching account data:', error);
      }
    };

    fetchAccountData();
  }, []);

  if (!chartData) {
    return <p>Loading chart data...</p>;
  }

  return (
    <div>
      <h2 className={styles.AccountBarChart}>Account Values</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default AccountBarChart;
