import express from 'express';
import { getHoldings, getAllocation, getPerformanceComparison, getPortfolioSummary } from '../controllers/portfolioControllers.js';

const router = express.Router();

router.get('/', getHoldings);
router.get('/allocation', getAllocation);
router.get('/performance', getPerformanceComparison); // New route
router.get('/summary', getPortfolioSummary); // New route

export default router;