import React, { useEffect, useState } from 'react';
import alertify from 'alertifyjs';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import FacultyAttendance from './pages/FacultyAttendance';
import Exams from './pages/Exams';
import Finance from './pages/Finance';
import Library from './pages/Library';
import NotFound from './pages/NotFound';

const pages = {
    dashboard: Dashboard,
    students: Students,
    faculty: FacultyAttendance,
    exams: Exams,
    finance: Finance,
    library: Library,
};

export default function App() {
    const [page, setPage] = useState(() => {
        const path = window.location.pathname;

        if (path !== '/' && path !== '/index.html') {
            return '__404__';
        }

        return localStorage.getItem('college-admin-page') || 'dashboard';
    });

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [notifications, setNotifications] = useState(3);

    useEffect(() => {
        localStorage.setItem('college-admin-page', page);
    }, [page]);

    useEffect(() => {
        const onKey = (event) => {
            if (event.key === 'Escape') {
                setSidebarOpen(false);
            }
        };

        window.addEventListener('keydown', onKey);

        return () => {
            window.removeEventListener('keydown', onKey);
        };
    }, []);

    const navigate = (next) => {
        if (next === 'dashboard') {
            window.history.pushState({}, '', '/');
        }

        setPage(next);
        setSidebarOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const Page = pages[page] || NotFound;

    const showNotifications = () => {
        if (notifications) {
            const message = `You have ${notifications} new notification${
                notifications > 1 ? 's' : ''
            }.`;

            alertify.success(message);
            setNotifications(0);
        } else {
            alertify.message('You are all caught up.');
        }
    };

    const logout = () => {
        alertify.confirm(
            'Sign out',
            'Are you sure you want to sign out of the CMS?',
            () => alertify.success('Signed out successfully.'),
            () => alertify.message('Logout cancelled.')
        );
    };

    return (
        <Layout
            page={page}
            onNavigate={navigate}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            notifications={notifications}
            onNotifications={showNotifications}
            onSettings={() =>
                alertify.message('Settings panel is ready for configuration.')
            }
            onLogout={logout}
        >
            <Page onNavigate={navigate} />
        </Layout>
    );
}
