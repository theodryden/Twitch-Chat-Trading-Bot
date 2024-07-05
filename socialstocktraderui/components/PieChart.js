import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import styles from './PieChart.module.css'

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch('/api/positions');
        const data = await response.json();

        setPositions(data);
      } catch (error) {
        console.error('Error fetching positions:', error);
      }
    };

    fetchPositions();
  }, []);

  // Prepare data for the Pie Chart
  const chartData = {
    labels: positions.map(position => position.symbol),
    datasets: [{
      data: positions.map(position => position.market_value),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#4D8FAC'],
    }],
  };

  return (
    <div>
      <h2 className={styles.PieChart}>Open Positions</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
