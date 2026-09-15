import React from 'react';

export default function Finance() {
    const transactions = [
        ['INV-2084', 'Aarav Shrestha', 'eSewa', 'Rs. 32,000', 'Paid'],
        ['INV-2083', 'Nisha Gurung', 'Bank Transfer', 'Rs. 28,500', 'Paid'],
        ['INV-2082', 'Sujal Thapa', 'Cash', 'Rs. 18,000', 'Pending'],
        ['INV-2081', 'Prakriti Rai', 'Card', 'Rs. 25,500', 'Paid'],
    ];

    return (
        <section className="page">
            <div className="page-heading">
                <div>
                    <div className="eyebrow">Financial overview</div>
                    <h1 className="page-title">Finance</h1>
                    <p className="page-subtitle">
                        Keep track of collections, invoices and pending dues.
                    </p>
                </div>
                <button className="primary-btn">+ Create Invoice</button>
            </div>

            <div className="stat-grid">
                <div className="stat-card">
                    <div className="detail-label">Collected this month</div>
                    <div className="stat-value">Rs. 42.85L</div>
                    <span className="stat-delta up">+8.2%</span>
                </div>

                <div className="stat-card">
                    <div className="detail-label">Pending dues</div>
                    <div className="stat-value">Rs. 8.52L</div>
                    <span className="stat-delta down">-5.4%</span>
                </div>

                <div className="stat-card">
                    <div className="detail-label">Invoices paid</div>
                    <div className="stat-value">846</div>
                    <span className="stat-delta up">+32</span>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <div>
                        <h2>Recent transactions</h2>
                        <p>Latest fee activity</p>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Reference</th>
                            <th>Student</th>
                            <th>Method</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction[0]}>
                                <td>
                                    <strong>{transaction[0]}</strong>
                                </td>
                                <td>{transaction[1]}</td>
                                <td>{transaction[2]}</td>
                                <td>{transaction[3]}</td>
                                <td>
                                    <span
                                        className={`status ${transaction[4].toLowerCase()}`}
                                    >
                                        {transaction[4]}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
