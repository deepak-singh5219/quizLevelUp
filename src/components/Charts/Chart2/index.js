import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

const Chart2 = ({ data }) => {
  const chartData = {
    labels: [
      'Correct',
      'Incorrect',
    ],
    datasets: [
      {
        data: [
          data.correct,
          data.incorrect,
        ],
        backgroundColor: [
          'rgba(33, 217, 140',
          'rgba(217, 211, 33)',
        ],
        borderColor: [
            'rgba(33, 217, 140',
            'rgba(217, 211, 33)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '80%', // Adjust doughnut thickness
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
        },
      },
    },
    layout: {
      padding: 10, // Adjust label spacing
    },
    scales: {
      yAxis: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container flex flex-col items-start justify-center w-[50%] h-[70%]">
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};

export default Chart2;