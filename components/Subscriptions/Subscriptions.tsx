import React from 'react'

const Subscriptions = () => {
    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full mb-3">
            <div className="stat">
                <div className="stat-title">Subscription Type</div>
                <div className="stat-value">Tier 1</div>
                <div className="stat-desc">Date Expire : February 1, 2024</div>
            </div>

            <div className="stat">
                <div className="stat-title">Average Monthly Sales</div>
                <div className="stat-value">$600.00</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
                <div className="stat-title">Pending Orders</div>
                <div className="stat-value">200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

        </div>
    )
}

export default Subscriptions