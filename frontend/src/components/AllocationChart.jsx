import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const AllocationChart = ({ data, title }) => {
    if (!data) return <div>Loading {title} data...</div>;

    const chartData = {
        labels: Object.keys(data),
        datasets: [{
            data: Object.values(data).map(item => parseFloat(item.percentage)),
            backgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
                '#9966FF', '#FF9F40', '#8AC24A', '#FF6B6B'
            ],
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        return `${label}: ${value}%`;
                    }
                }
            },
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
                font: {
                    size: 16
                },
            },
        }
    };

    return (
        <div className="chart-container">
            <h2>{title}</h2>
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default AllocationChart;