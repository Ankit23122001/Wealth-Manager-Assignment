import React from 'react';
import { useOutletContext } from 'react-router-dom';

const TopPerformers = () => {
    // Use the useOutletContext hook to get the summary data from the parent Dashboard component
    const { summary } = useOutletContext();

    // Add a check to ensure summary data exists before trying to access its properties.
    if (!summary || !summary.topPerformer || !summary.worstPerformer) {
        return <div className="p-8 text-center text-gray-500">No top performers data available.</div>;
    }

    return (
        <div className="top-performers p-8">
            <h2 className="text-2xl font-bold mb-4">Top and Worst Performers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Top Performer Card */}
                <div className="performer bg-green-500 text-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Top Performer</h3>
                    <p className="text-lg">{summary.topPerformer.name} ({summary.topPerformer.gainPercent.toFixed(2)}%)</p>
                </div>
                {/* Worst Performer Card */}
                <div className="performer bg-red-500 text-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Worst Performer</h3>
                    <p className="text-lg">{summary.worstPerformer.name} ({summary.worstPerformer.gainPercent.toFixed(2)}%)</p>
                </div>
            </div>
        </div>
    );
};

export default TopPerformers;