import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Holding from './models/Holding.js';

dotenv.config();

const holdings = [
    {
        name: "Reliance Industries Limited",
        symbol: "RELIANCE",
        quantity: 50,
        avgPrice: 2450,
        currentPrice: 2680.5,
        sector: "Energy",
        marketCap: "Large",
        exchange: "NSE",
        value: 134025,
        gainLoss: 11525,
        gainLossPercent: 0.0939
    },
    {
        symbol: "INFY",
        name: "Infosys Limited",
        quantity: 100,
        avgPrice: 1800,
        currentPrice: 2010.75,
        sector: "Technology",
        marketCap: "Large",
        exchange: "NSE",
        value: 201075,
        gainLoss: 21075,
        gainLossPercent: 11.71,
    },
    {
        symbol: "TCS",
        name: "Tata Consultancy Services",
        quantity: 75,
        avgPrice: 3200,
        currentPrice: 3450.25,
        sector: "Technology",
        marketCap: "Large",
        exchange: "NSE",
        value: 258768.8,
        gainLoss: 18768.75,
        gainLossPercent: 0.0782
    },
    {
        symbol: "HDFCBANK",
        name: "HDFC Bank Limited",
        quantity: 80,
        avgPrice: 1650,
        currentPrice: 1580.3,
        sector: "Banking",
        marketCap: "Large",
        exchange: "NSE",
        value: 126424,
        gainLoss: -5576,
        gainLossPercent: -0.0422
    },
    {
        symbol: 'ICICIBANK',
        name: 'ICICI Bank Limited',
        quantity: 60,
        avgPrice: 1100,
        currentPrice: 1235.8,
        sector: 'Banking',
        marketCap: 'Large',
        exchange: 'NSE',
        value: 74148,
        gainLoss: 8148,
        gainLossPercent: 0.1234,
    },
    {
        symbol: 'BHARTIARTL',
        name: 'Bharti Airtel Limited',
        quantity: 120,
        avgPrice: 850,
        currentPrice: 920.45,
        sector: 'Telecommunications',
        marketCap: 'Large',
        exchange: 'NSE',
        value: 110454,
        gainLoss: 8454,
        gainLossPercent: 0.0828,
    },
    {
        symbol: 'ITC',
        name: 'ITC Limited',
        quantity: 200,
        avgPrice: 420,
        currentPrice: 465.2,
        sector: 'Consumer Goods',
        marketCap: 'Large',
        exchange: 'NSE',
        value: 93040,
        gainLoss: 9040,
        gainLossPercent: 0.1076,
    },
    {
        symbol: 'BAJFINANCE',
        name: 'Bajaj Finance Limited',
        quantity: 25,
        avgPrice: 6800,
        currentPrice: 7150.6,
        sector: 'Financial Services',
        marketCap: 'Large',
        exchange: 'NSE',
        value: 178765,
        gainLoss: 8765,
        gainLossPercent: 0.0515,
    },
    {
        symbol: 'ASIANPAINT',
        name: 'Asian Paints Limited',
        quantity: 40,
        avgPrice: 3100,
        currentPrice: 2890.75,
        sector: 'Consumer Discretionary',
        marketCap: 'Large',
        exchange: 'NSE',
        value: 115630,
        gainLoss: -8370,
        gainLossPercent: -0.0675,
    },
    {
        symbol: 'MARUTI',
        name: 'Maruti Suzuki India Limited',
        quantity: 30,
        avgPrice: 9500,
        currentPrice: 10250.3,
        sector: 'Automotive',
        marketCap: 'Large',
        exchange: 'NSE',
        value: 307509,
        gainLoss: 22509,
        gainLossPercent: 0.079,
    },
    {
        symbol: 'WIPRO',
        name: 'Wipro Limited',
        quantity: 150,
        avgPrice: 450,
        currentPrice: 485.6,
        sector: 'Technology',
        marketCap: 'Large',
        exchange: 'NSE',
        value: 72840,
        gainLoss: 5340,
        gainLossPercent: 0.0791,
    },
    {
        symbol: 'TATAMOTORS',
        name: 'Tata Motors Limited',
        quantity: 100,
        avgPrice: 650,
        currentPrice: 720.85,
        sector: 'Automotive',
        marketCap: 'Large',
        exchange: 'NSE',
        value: 72085,
        gainLoss: 7085,
        gainLossPercent: 0.109,
    },
    {
        symbol: 'TECHM',
        name: 'Tech Mahindra Limited',
        quantity: 80,
        avgPrice: 1200,
        currentPrice: 1145.25,
        sector: 'Technology',
        marketCap: 'Large',
        exchange: 'NSE',
        value: 91620,
        gainLoss: -4380,
        gainLossPercent: -0.0456,
    },
    {
        symbol: 'AXISBANK',
        name: 'Axis Bank Limited',
        quantity: 90,
        avgPrice: 980,
        currentPrice: 1055.4,
        sector: 'Banking',
        marketCap: 'Large',
        exchange: 'NSE',
        value: 94986,
        gainLoss: 6786,
        gainLossPercent: 0.0769,
    },
    {
        symbol: 'SUNPHARMA',
        name: 'Sun Pharmaceutical Industries',
        quantity: 60,
        avgPrice: 1150,
        currentPrice: 1245.3,
        sector: 'Healthcare',
        marketCap: 'Large',
        exchange: 'NSE',
        value: 74718,
        gainLoss: 5718,
        gainLossPercent: 0.0829,
    }


];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB');

        await Holding.deleteMany(); // Clear existing data
        await Holding.insertMany(holdings); // Insert new data

        console.log('Data seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedDatabase();








