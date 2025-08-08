import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import HoldingsTable from './components/HoldingsTable';
import TopPerformers from './components/TopPerformers';
import PerformanceChart from './components/PerformanceChart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="holdings" element={<HoldingsTable />} />
          <Route path="performance" element={<PerformanceChart />} />
          <Route path="topperformers" element={<TopPerformers />} />
        </Route>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
};

export default App;