import express from 'express';
import { getHoldings, getAllocation, getPerformanceComparison, getPortfolioSummary } from '../controllers/portfolioControllers.js';

const router = express.Router();

router.get('/', getHoldings);
router.get('/allocation', getAllocation);
router.get('/performance', getPerformanceComparison); 
router.get('/summary', getPortfolioSummary); 

export default router;