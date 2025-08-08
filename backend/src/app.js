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
    origin: 'http://localhost:5173', // Change this to your frontend's port
    optionsSuccessStatus: 200 // For legacy browser support
};

// Middleware
app.use(cors(corsOptions)); // Pass the options to the cors middleware
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