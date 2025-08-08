// index.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import portfolioRoutes from './routes/portfolio.js';

dotenv.config();

const app = express();

// Configure CORS to allow requests from your frontend's origin
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/portfolio', portfolioRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});