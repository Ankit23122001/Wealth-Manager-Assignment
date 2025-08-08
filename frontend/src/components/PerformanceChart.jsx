import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useOutletContext } from 'react-router-dom';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


const PerformanceChart = () => {
    const { performance } = useOutletContext();

    if (!performance || !performance.timeline) {
        return <div>Loading performance data...</div>;
    }

    const { timeline } = performance;

    const chartData = {
        labels: timeline.map(item => new Date(item.date).toLocaleDateString()),
        datasets: [
            {
                label: 'Portfolio (₹)',
                data: timeline.map(item => item.portfolio),
                borderColor: '#36A2EB',
                backgroundColor: 'rgba(54, 162, 235, 0.1)',
                tension: 0.3,
                fill: true
            },
            {
                label: 'Nifty50',
                data: timeline.map(item => item.nifty50),
                borderColor: '#FF6384',
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                tension: 0.3
            },
            {
                label: 'Gold (₹)',
                data: timeline.map(item => item.gold),
                borderColor: '#FFCE56',
                backgroundColor: 'rgba(255, 206, 86, 0.1)',
                tension: 0.3
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Performance Comparison',
                font: {
                    size: 16,
                },
            },
            legend: {
                position: 'top',
            },
        },
    };

    return (
        <div className="chart-container p-8">
            <Line data={chartData} options={options} />
        </div>
    );
};

export default PerformanceChart;
