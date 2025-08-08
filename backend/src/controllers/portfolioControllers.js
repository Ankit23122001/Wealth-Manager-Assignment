import Holding from '../models/Holding.js';

export const getHoldings = async (req, res) => {
    try {
        const holdings = await Holding.find();
        res.json(holdings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching holdings', error });
    }
};

export const getAllocation = async (req, res) => {
    try {
        const holdings = await Holding.find();
        const bySector = {};
        const byMarketCap = {};

        holdings.forEach((holding) => {
            // Sector allocation
            if (!bySector[holding.sector]) {
                bySector[holding.sector] = { value: 0, percentage: 0 };
            }
            bySector[holding.sector].value += holding.value;

            // Market cap allocation
            if (!byMarketCap[holding.marketCap]) {
                byMarketCap[holding.marketCap] = { value: 0, percentage: 0 };
            }
            byMarketCap[holding.marketCap].value += holding.value;
        });

        const totalValue = holdings.reduce((sum, holding) => sum + holding.value, 0);

        Object.keys(bySector).forEach((sector) => {
            bySector[sector].percentage = ((bySector[sector].value / totalValue) * 100).toFixed(2);
        });

        Object.keys(byMarketCap).forEach((marketCap) => {
            byMarketCap[marketCap].percentage = ((byMarketCap[marketCap].value / totalValue) * 100).toFixed(2);
        });

        res.json({ bySector, byMarketCap });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching allocation', error });
    }
};

export const getPerformanceComparison = async (req, res) => {
    try {
        const performanceData = {
            timeline: [
                { date: '2024-01-01', portfolio: 650000, nifty50: 21000, gold: 62000 },
                { date: '2024-03-01', portfolio: 680000, nifty50: 22100, gold: 64500 },
                { date: '2024-06-01', portfolio: 700000, nifty50: 23500, gold: 68000 },
            ],
            returns: {
                portfolio: { '1month': 2.3, '3months': 8.1, '1year': 15.7 },
                nifty50: { '1month': 1.8, '3months': 6.2, '1year': 12.4 },
                gold: { '1month': -0.5, '3months': 4.1, '1year': 8.9 },
            },
        };

        res.status(200).json(performanceData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching performance data', error });
    }
};

export const getPortfolioSummary = async (req, res) => {
    try {
        const summaryData = {
            totalValue: 700000,
            totalInvested: 600000,
            totalGainLoss: 100000,
            totalGainLossPercent: 16.67,
            topPerformer: {
                symbol: 'INFY',
                name: 'Infosys Limited',
                gainPercent: 28.5,
            },
            worstPerformer: {
                symbol: 'HDFC',
                name: 'HDFC Bank',
                gainPercent: -2.1,
            },
            diversificationScore: 8.2,
            riskLevel: 'Moderate',
        };

        res.status(200).json(summaryData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching portfolio summary', error });
    }
};