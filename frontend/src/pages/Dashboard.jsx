import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import api from '../api';
import OverviewCards from '../components/OverviewCards';
import AllocationChart from '../components/AllocationChart';


const Dashboard = () => {
    // State to hold all the fetched data
    const [summary, setSummary] = useState(null);
    const [holdings, setHoldings] = useState([]);
    const [allocation, setAllocation] = useState(null);
    const [performance, setPerformance] = useState(null);

    // useEffect to fetch all data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all data from the API
                const summaryRes = await api.get('/summary');
                const holdingsRes = await api.get('/');
                const allocationRes = await api.get('/allocation');
                const performanceRes = await api.get('/performance');

                // Update the state with the fetched data
                setSummary(summaryRes.data);
                setHoldings(holdingsRes.data);
                setAllocation(allocationRes.data);
                setPerformance(performanceRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once

    // A robust check to ensure all necessary data is loaded before rendering
    if (!summary || !holdings || !holdings.length || !allocation || !performance) {
        return <div>Loading portfolio data...</div>;
    }

    return (
        <div className="dashboard p-8">

            <OverviewCards summary={summary} holdingsCount={holdings.length} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                {allocation.bySector && (
                    <AllocationChart
                        data={allocation.bySector}
                        title="Sector Allocation"
                        key="sector-allocation-chart"
                    />
                )}
                {allocation.byMarketCap && (
                    <AllocationChart
                        data={allocation.byMarketCap}
                        title="Market Cap Allocation"
                        key="market-cap-allocation-chart"
                    />
                )}
            </div>
            <Outlet context={{ summary, holdings, allocation, performance }} />
        </div>
    );
};

export default Dashboard;