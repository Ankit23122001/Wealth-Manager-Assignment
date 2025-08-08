<h2>My Portfolio Dashboard </h2> 
This is a single-page application (SPA) built with React for a personal portfolio dashboard. It provides a comprehensive view of investment performance and holdings, with interactive charts and a clear, modular design.

The application uses React Router DOM for client-side routing and a component-based architecture to organize different parts of the dashboard.

Project Overview
<br/>
The dashboard is designed to provide a quick and easy way to track a portfolio's performance. It is composed of several key sections:

> Overview Cards: A summary of your portfolio's total value and key metrics.

> Allocation Charts: Visualizations of asset allocation by sector and market cap.

> Holdings Table: A detailed list of all individual holdings and their performance.

> Performance Chart: A line chart that compares your portfolio's performance against market benchmarks.

> Top Performers: A summary of your best and worst-performing assets.

<h2>Tech Stack</h2>
> Frontend: React, React Router DOM, Chart.js.

> Data: The application uses a simple API to fetch mock data, with endpoints like
/summary,
/allocation,
and /performance that are called from the Dashboard component.

<h2>Routes</h2>
The application uses a nested routing structure. The main dashboard acts as a layout, and individual content is rendered inside of it based on the URL.

<h2>Route</h2>
1. Redirects to the main dashboard. 
        /  <br/>
2. Displays the overview cards and allocation charts.
        /dashboard  <br/>
3. Renders the detailed HoldingsTable component.
        /dashboard/holdings  <br/>
4. Renders the PerformanceChart component.
        /dashboard/performance  <br/>
5. Renders the TopPerformers component.
        /dashboard/topperformers  <br/>

Getting Started
Follow these steps to get the project up and running locally.

1. Install dependencies:
     > npm install
2. Start the development server:
     >npm run dev

<h1>Backend SetUp</h1>
<h2>Tech Stack </h2><br/>

> Node.js & Express: The server is built using the Express framework for Node.js, providing a robust and flexible API foundation.

> MongoDB: The application uses MongoDB for database storage.

> dotenv: Used for managing environment variables (like the server port and database connection string) securely.

> cors: A Node.js middleware that enables Cross-Origin Resource Sharing, allowing the frontend to make requests to the API.

<h3>API Endpoints</h3>
The API provides the following endpoints for the frontend to consume. All routes are prefixed with /api/portfolio.

<h4>Configuration</h4>

The server's configuration is managed through environment variables to ensure sensitive information is not hard-coded.

1. Environment Variables: Create a .env file in the root directory of the backend project.
     >PORT=5000 (or your desired port)
     
     >MONGODB_URI=<your_mongodb_connection_string>

2. CORS: The corsOptions middleware is configured to allow requests from the frontend at http://localhost:5173. If your frontend is running on a different port or domain, you must update the origin value in index.js.

<h3>Getting Started</h3>

Follow these steps to get the backend server running locally.

1. Install dependencies:
      > npm install

2. Start the server:
      > npm start

