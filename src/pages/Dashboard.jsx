import React from 'react';
import Icon from '../components/Icon';
import StatCard from '../components/StatCard';
import AttendanceChart from '../components/AttendanceChart';

export default function Dashboard({ onNavigate }) {
    const recentStudents = [
        ['Aarav Shrestha', 'BSc CSIT', 'Active', 'Today'],
        ['Nisha Gurung', 'BBA', 'Active', 'Yesterday'],
        ['Sujal Thapa', 'BIT', 'Pending', 'Aug 30'],
        ['Prakriti Rai', 'BCA', 'Active', 'Aug 29'],
    ];

    const notices = [
        [
            'Semester Examination Form',
            'Submission closes September 7.',
            '2 hours ago',
            'blue',
        ],
        [
            'Library Timing Update',
            'Library will remain open until 7 PM.',
            '2 days ago',
            'orange',
        ],
        [
            'Scholarship Applications',
            'New scholarship applications are now open.',
            '3 days ago',
            'green',
        ],
    ];

    return (
        <section className="page">
            <div className="page-heading">
                <div>
                    <div className="eyebrow">Tuesday, September 1, 2026</div>
                    <h1 className="page-title">Dashboard Overview</h1>
                    <p className="page-subtitle">
                        A quick view of today's academic activity.
                    </p>
                </div>

                <button
                    className="primary-btn"
                    onClick={() => onNavigate('students')}
                >
                    <Icon name="students" size={16} />
                    Manage Students
                </button>
            </div>

            <div className="stat-grid">
                <StatCard
                    label="Total Students"
                    value="1,248"
                    delta="+12%"
                    icon={<Icon name="students" />}
                />
                <StatCard
                    label="Total Faculty"
                    value="84"
                    delta="+4%"
                    icon={<Icon name="faculty" />}
                />
                <StatCard
                    label="Fee Collection"
                    value="Rs. 42.85L"
                    delta="+8.2%"
                    icon={<Icon name="finance" />}
                />
                <StatCard
                    label="Pending Dues"
                    value="Rs. 8.52L"
                    delta="-5.4%"
                    positive={false}
                    icon={<Icon name="calendar" />}
                />
            </div>

            <div className="content-grid">
                <div className="card chart-card">
                    <div className="card-header">
                        <div>
                            <h2>Attendance Overview</h2>
                            <p>Weekly student attendance percentage</p>
                        </div>
                        <span className="live-pill">
                            <i /> Live data
                        </span>
                    </div>
                    <AttendanceChart />
                </div>

                <div className="card">
                    <div className="card-header">
                        <div>
                            <h2>Today's Snapshot</h2>
                            <p>Key campus activity</p>
                        </div>
                    </div>

                    <div className="snapshot-list">
                        <div>
                            <span className="snapshot-icon green">✓</span>
                            <div>
                                <strong>1,126 students</strong>
                                <small>Marked present today</small>
                            </div>
                        </div>
                        <div>
                            <span className="snapshot-icon blue">⌁</span>
                            <div>
                                <strong>68 classes</strong>
                                <small>Currently scheduled</small>
                            </div>
                        </div>
                        <div>
                            <span className="snapshot-icon orange">!</span>
                            <div>
                                <strong>14 notices</strong>
                                <small>Published this week</small>
                            </div>
                        </div>
                        <div>
                            <span className="snapshot-icon purple">₨</span>
                            <div>
                                <strong>Rs. 2.4L</strong>
                                <small>Collected today</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-grid lower">
                <div className="card">
                    <div className="card-header">
                        <div>
                            <h2>Recent Students</h2>
                            <p>Latest registrations</p>
                        </div>
                        <button
                            className="text-btn"
                            onClick={() => onNavigate('students')}
                        >
                            View all <Icon name="arrow" size={14} />
                        </button>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Program</th>
                                <th>Status</th>
                                <th>Joined</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentStudents.map((student) => (
                                <tr key={student[0]}>
                                    <td>
                                        <div className="person">
                                            <span className="avatar">
                                                {student[0]
                                                    .split(' ')
                                                    .map((part) => part[0])
                                                    .join('')}
                                            </span>
                                            <strong>{student[0]}</strong>
                                        </div>
                                    </td>
                                    <td>{student[1]}</td>
                                    <td>
                                        <span
                                            className={`status ${student[2].toLowerCase()}`}
                                        >
                                            {student[2]}
                                        </span>
                                    </td>
                                    <td>{student[3]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="card notice-card">
                    <div className="card-header">
                        <div>
                            <h2>Notices</h2>
                            <p>Recent announcements</p>
                        </div>
                        <button
                            className="text-btn"
                            onClick={() => onNavigate('library')}
                        >
                            See all
                        </button>
                    </div>

                    <div className="notice-list">
                        {notices.map((notice) => (
                            <div key={notice[0]}>
                                <span
                                    className={`notice-dot ${notice[3]}-dot`}
                                />
                                <div>
                                    <strong>{notice[0]}</strong>
                                    <p>{notice[1]}</p>
                                    <small>{notice[2]}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
