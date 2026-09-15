import React, { useState } from 'react';
import alertify from 'alertifyjs';

const initial = [
    ['Aarav Shrestha', 'BSc CSIT', '2026-01-12', 'Active'],
    ['Nisha Gurung', 'BBA', '2026-01-15', 'Active'],
    ['Sujal Thapa', 'BIT', '2026-02-03', 'Pending'],
    ['Prakriti Rai', 'BCA', '2026-02-18', 'Active'],
    ['Rohan Karki', 'BSc CSIT', '2026-03-01', 'Active'],
];

export default function Students() {
    const [students, setStudents] = useState(initial);
    const [query, setQuery] = useState('');
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');

    const filtered = students.filter((student) =>
        student.join(' ').toLowerCase().includes(query.toLowerCase())
    );

    const add = () => {
        if (!name.trim()) {
            alertify.error('Please enter a student name.');
            return;
        }

        setStudents((currentStudents) => [
            [name.trim(), 'BSc CSIT', '2026-09-01', 'Active'],
            ...currentStudents,
        ]);
        setName('');
        setShow(false);
        alertify.success('Student added successfully.');
    };

    const remove = (index) => {
        alertify.confirm(
            'Delete student',
            `Remove ${filtered[index][0]} from the list?`,
            () => {
                const target = filtered[index][0];

                setStudents((currentStudents) =>
                    currentStudents.filter((student) => student[0] !== target)
                );
                alertify.success('Student removed.');
            },
            () => {}
        );
    };

    return (
        <section className="page">
            <div className="page-heading">
                <div>
                    <div className="eyebrow">Student records</div>
                    <h1 className="page-title">Students</h1>
                    <p className="page-subtitle">
                        Manage enrolments and student status.
                    </p>
                </div>

                <button className="primary-btn" onClick={() => setShow(true)}>
                    + Add Student
                </button>
            </div>

            <div className="card">
                <div className="toolbar">
                    <div className="table-search">
                        <span>⌕</span>
                        <input
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search students..."
                        />
                    </div>
                    <span className="result-count">
                        {filtered.length} records
                    </span>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Program</th>
                                <th>Enrolled</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((student, index) => (
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
                                    <td>{student[2]}</td>
                                    <td>
                                        <span
                                            className={`status ${student[3].toLowerCase()}`}
                                        >
                                            {student[3]}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className="danger-btn"
                                            onClick={() => remove(index)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {show && (
                <div className="modal-backdrop">
                    <div className="modal">
                        <div className="modal-head">
                            <div>
                                <h2>Add student</h2>
                                <p>Create a new student record.</p>
                            </div>
                            <button onClick={() => setShow(false)}>×</button>
                        </div>

                        <label>
                            Student name
                            <input
                                autoFocus
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="e.g. Anish Sharma"
                            />
                        </label>

                        <div className="modal-actions">
                            <button
                                className="secondary-btn"
                                onClick={() => setShow(false)}
                            >
                                Cancel
                            </button>
                            <button className="primary-btn" onClick={add}>
                                Add Student
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
