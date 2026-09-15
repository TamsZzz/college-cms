import React, { useState } from 'react';
import alertify from 'alertifyjs';

const staff = [
    ['Dr. Ramesh K.C.', 'Computer Science', '8:00 AM', 'Present'],
    ['Ms. Anita Shrestha', 'Management', '9:00 AM', 'Present'],
    ['Mr. Bikash Rai', 'Mathematics', '10:00 AM', 'Absent'],
    ['Ms. Sushma Gurung', 'BCA', '11:00 AM', 'Present'],
];

export default function FacultyAttendance() {
    const [filter, setFilter] = useState('All');
    const [rows, setRows] = useState(staff);

    const mark = (index, status) => {
        setRows((currentRows) =>
            currentRows.map((row, rowIndex) =>
                rowIndex === index
                    ? [row[0], row[1], row[2], status]
                    : row
            )
        );

        alertify.success(`${rows[index][0]} marked ${status.toLowerCase()}.`);
    };

    const shown =
        filter === 'All' ? rows : rows.filter((row) => row[3] === filter);

    return (
        <section className="page">
            <div className="page-heading">
                <div>
                    <div className="eyebrow">Staff management</div>
                    <h1 className="page-title">Faculty & Attendance</h1>
                    <p className="page-subtitle">
                        Track faculty attendance and daily schedules.
                    </p>
                </div>

                <button
                    className="primary-btn"
                    onClick={() => alertify.message('Attendance report prepared.')}
                >
                    Generate Report
                </button>
            </div>

            <div className="mini-grid">
                <div className="mini-card">
                    <span>Present</span>
                    <strong>
                        {rows.filter((row) => row[3] === 'Present').length}
                    </strong>
                </div>

                <div className="mini-card">
                    <span>Absent</span>
                    <strong>
                        {rows.filter((row) => row[3] === 'Absent').length}
                    </strong>
                </div>

                <div className="mini-card">
                    <span>Attendance</span>
                    <strong>
                        {Math.round(
                            (rows.filter((row) => row[3] === 'Present').length /
                                rows.length) *
                                100
                        )}
                        %
                    </strong>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <div>
                        <h2>Today's faculty roll</h2>
                        <p>Update attendance using the actions.</p>
                    </div>

                    <div className="pill-tabs">
                        {['All', 'Present', 'Absent'].map((option) => (
                            <button
                                key={option}
                                className={`pill ${filter === option ? 'active' : ''}`}
                                onClick={() => setFilter(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Faculty</th>
                                <th>Department</th>
                                <th>Start</th>
                                <th>Status</th>
                                <th>Mark</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shown.map((row) => (
                                <tr key={row[0]}>
                                    <td>
                                        <div className="person">
                                            <span className="avatar">
                                                {row[0]
                                                    .split(' ')
                                                    .slice(-2)
                                                    .map((part) => part[0])
                                                    .join('')}
                                            </span>
                                            <strong>{row[0]}</strong>
                                        </div>
                                    </td>
                                    <td>{row[1]}</td>
                                    <td>{row[2]}</td>
                                    <td>
                                        <span
                                            className={`status ${row[3].toLowerCase()}`}
                                        >
                                            {row[3]}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className="pa-btn"
                                            onClick={() =>
                                                mark(rows.indexOf(row), 'Present')
                                            }
                                        >
                                            P
                                        </button>
                                        <button
                                            className="pa-btn"
                                            onClick={() =>
                                                mark(rows.indexOf(row), 'Absent')
                                            }
                                        >
                                            A
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
