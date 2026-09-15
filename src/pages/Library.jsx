import React from 'react';
import alertify from 'alertifyjs';

export default function Library() {
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
        [
            'Orientation Programme',
            'Freshers orientation starts September 12.',
            '4 days ago',
            'purple',
        ],
    ];

    return (
        <section className="page">
            <div className="page-heading">
                <div>
                    <div className="eyebrow">Resources & communication</div>
                    <h1 className="page-title">Library & Notices</h1>
                    <p className="page-subtitle">
                        Manage announcements and library updates.
                    </p>
                </div>

                <button
                    className="primary-btn"
                    onClick={() =>
                        alertify.prompt(
                            'New notice',
                            'Enter the notice title:',
                            '',
                            () => alertify.success('Notice created.'),
                            () => {}
                        )
                    }
                >
                    + New Notice
                </button>
            </div>

            <div className="content-grid">
                <div className="card">
                    <div className="card-header">
                        <div>
                            <h2>Latest notices</h2>
                            <p>Campus announcements</p>
                        </div>
                    </div>

                    <div className="notice-list large">
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

                <div className="card library-card">
                    <div className="card-header">
                        <div>
                            <h2>Library</h2>
                            <p>Today's resource status</p>
                        </div>
                    </div>

                    <div className="library-stat">
                        <strong>18,420</strong>
                        <span>Books available</span>
                    </div>
                    <div className="library-stat">
                        <strong>126</strong>
                        <span>Books issued today</span>
                    </div>
                    <div className="library-stat">
                        <strong>94%</strong>
                        <span>Return rate</span>
                    </div>

                    <button
                        className="secondary-btn full"
                        onClick={() => alertify.message('Library inventory opened.')}
                    >
                        Open inventory
                    </button>
                </div>
            </div>
        </section>
    );
}
