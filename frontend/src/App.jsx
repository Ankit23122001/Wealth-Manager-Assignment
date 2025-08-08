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
        {/*
          This is the new main dashboard route. It will act as the layout
          and will use <Outlet /> to display the content of the nested routes.
          The parent route path should NOT have a leading slash.
        */}
        <Route path="dashboard" element={<Dashboard />}>
          {/*
            The index route handles the content when the path is exactly '/dashboard'.
            Here, we will render a Summary component or a placeholder.
          */}
          {/* <Route index element={<p>Dashboard Summary Content</p>} /> */}

          {/*
            These are now correctly nested routes.
            Their paths DO NOT start with a '/'.
          */}
          <Route path="holdings" element={<HoldingsTable />} />
          <Route path="performance" element={<PerformanceChart />} />
          <Route path="topperformers" element={<TopPerformers />} />
        </Route>

        {/*
          This route will catch the root path '/' and redirect to the dashboard.
          This is a common and clean way to handle the root of an app.
        */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
};

export default App;