import React, { useState } from 'react';
import Icon from './Icon';

const nav = [
    ['dashboard', 'Dashboard', 'dashboard'],
    ['students', 'Students', 'students'],
    ['faculty', 'Faculty & Attendance', 'faculty'],
    ['exams', 'Exams & Results', 'exams'],
    ['finance', 'Finance', 'finance'],
    ['library', 'Library & Notices', 'library'],
];

export default function Layout({
    children,
    page,
    onNavigate,
    sidebarOpen,
    setSidebarOpen,
    notifications,
    onNotifications,
    onSettings,
    onLogout,
}) {
    const [search, setSearch] = useState('');

    const filtered = nav.filter((item) =>
        item[1].toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="app">
            <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="brand">
                    <div className="brand-mark">
                        <span>CM</span>
                    </div>
                    <div>
                        <div className="brand-name">College</div>
                        <div className="brand-sub">Management System</div>
                    </div>
                </div>

                <div className="nav-label">MAIN MENU</div>

                <nav className="nav">
                    {filtered.map(([id, label, icon]) => (
                        <button
                            key={id}
                            className={`nav-item ${page === id ? 'active' : ''}`}
                            onClick={() => onNavigate(id)}
                        >
                            <Icon name={icon} />
                            <span>{label}</span>
                        </button>
                    ))}
                </nav>

                <div className="sidebar-note">
                    <strong>Academic Year</strong>
                    <span>2026 / 2027</span>
                </div>

                <div className="sidebar-footer">
                    <div className="admin-chip">
                        <div className="admin-avatar">AO</div>
                        <div className="admin-meta">
                            <span className="admin-name">Admin Office</span>
                            <span className="admin-role">REGISTRAR</span>
                        </div>
                    </div>

                    <button
                        className="logout-btn icon-btn"
                        onClick={onLogout}
                        title="Logout"
                    >
                        <Icon name="logout" />
                    </button>
                </div>
            </aside>

            {sidebarOpen && (
                <button
                    className="sidebar-overlay"
                    aria-label="Close menu"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <main className="main">
                <header className="topbar">
                    <button
                        className="mobile-menu icon-btn"
                        onClick={() => setSidebarOpen((value) => !value)}
                    >
                        <Icon name="menu" />
                    </button>

                    <div className="search-box">
                        <Icon name="search" size={17} />
                        <input
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search sections..."
                        />
                    </div>

                    <div className="topbar-actions">
                        <button
                            className="icon-btn notification"
                            onClick={onNotifications}
                            title="Notifications"
                        >
                            <Icon name="bell" />
                            <span
                                className={`badge ${notifications === 0 ? 'zero' : ''}`}
                            >
                                {notifications}
                            </span>
                        </button>

                        <button
                            className="icon-btn icon-btn-accent"
                            onClick={onSettings}
                            title="Settings"
                        >
                            <Icon name="settings" />
                        </button>
                    </div>
                </header>

                <div className="pages">{children}</div>
            </main>
        </div>
    );
}
