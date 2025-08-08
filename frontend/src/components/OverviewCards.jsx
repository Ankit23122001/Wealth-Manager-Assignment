import '../styles/Dashboard.css';

const OverviewCards = ({ summary, holdingsCount }) => {
    return (
        <div className="overview-cards">
            <div className="card">
                <h3>Total Portfolio Value</h3>
                <p>₹{summary.totalValue}</p>
            </div>
            <div className={`card ${summary.totalGainLoss > 0 ? 'green' : 'red'}`}>
                <h3>Total Gain/Loss</h3>
                <p>₹{summary.totalGainLoss} ({summary.totalGainLossPercent}%)</p>
            </div>
            <div className="card">
                <h3>Number of Holdings</h3>
                <p>{holdingsCount}</p>
            </div>
        </div>
    );
};

export default OverviewCards;