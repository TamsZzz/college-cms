import React from 'react';

export default function NotFound({ onNavigate }) {
    return (
        <section className="not-found">
            <div className="error-code">404</div>
            <h1>Page not found</h1>
            <p>
                The page you are looking for doesn't exist or has been moved.
            </p>
            <button
                className="primary-btn"
                onClick={() => onNavigate('dashboard')}
            >
                Back to Dashboard
            </button>
        </section>
    );
}
