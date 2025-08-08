import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HoldingsTable = () => {
  // Use the useOutletContext hook to get the data from the parent Dashboard component
  const { holdings } = useOutletContext();

  // Now, we can check for the holdings data
  if (!holdings || holdings.length === 0) {
    return <div className="p-8 text-center text-gray-500">No holdings data available.</div>;
  }

  return (
    <div className="table-container p-8">
      <h2 className="text-2xl font-bold mb-4">Your Holdings</h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Price</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gain/Loss</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {holdings.map((holding) => (
              <tr key={holding.symbol}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{holding.symbol}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{holding.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{holding.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{holding.avgPrice.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{holding.currentPrice.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{holding.value.toLocaleString()}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${holding.gainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ₹{holding.gainLoss.toLocaleString()} ({(holding.gainLossPercent * 100).toFixed(2)}%)
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HoldingsTable;