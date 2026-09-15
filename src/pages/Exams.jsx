import React from 'react';

export default function Exams() {
    const exams = [
        ['Database Systems', 'Sep 05, 2026', 'BSc CSIT'],
        ['Business Communication', 'Sep 08, 2026', 'BBA'],
        ['Web Technology', 'Sep 11, 2026', 'BIT'],
        ['Operating Systems', 'Sep 15, 2026', 'BCA'],
    ];

    const results = [
        ['Semester 1', '92%'],
        ['Semester 2', '76%'],
        ['Internal Assessment', '100%'],
    ];

    return (
        <section className="page">
            <div className="page-heading">
                <div>
                    <div className="eyebrow">Assessment centre</div>
                    <h1 className="page-title">Exams & Results</h1>
                    <p className="page-subtitle">
                        Monitor examinations, schedules and published results.
                    </p>
                </div>
            </div>

            <div className="content-grid">
                <div className="card">
                    <div className="card-header">
                        <div>
                            <h2>Upcoming examinations</h2>
                            <p>Next scheduled assessments</p>
                        </div>
                    </div>

                    <div className="exam-list">
                        {exams.map((exam) => (
                            <div className="exam-row" key={exam[0]}>
                                <div className="date-box">
                                    <b>{exam[1].split(' ')[1].replace(',', '')}</b>
                                    <small>{exam[1].split(' ')[0]}</small>
                                </div>

                                <div>
                                    <strong>{exam[0]}</strong>
                                    <p>{exam[2]}</p>
                                </div>

                                <span className="status scheduled">
                                    Scheduled
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div>
                            <h2>Result status</h2>
                            <p>Current publication progress</p>
                        </div>
                    </div>

                    <div className="progress-list">
                        {results.map((result) => (
                            <div key={result[0]}>
                                <div>
                                    <span>{result[0]}</span>
                                    <b>{result[1]}</b>
                                </div>

                                <div className="progress">
                                    <i style={{ width: result[1] }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
