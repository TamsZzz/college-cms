import React from 'react';

export default function StatCard({
    label,
    value,
    delta,
    icon,
    positive = true,
}) {
    return (
        <div className="stat-card">
            <div className="stat-top">
                <div className="stat-icon">{icon}</div>
                <span className={`stat-delta ${positive ? 'up' : 'down'}`}>
                    {delta}
                </span>
            </div>

            <div className="detail-label">{label}</div>
            <div className="stat-value">{value}</div>
        </div>
    );
}
