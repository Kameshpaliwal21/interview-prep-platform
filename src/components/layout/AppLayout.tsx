import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { LayoutDashboard, BookOpen, Code, Timer, LogOut, User } from 'lucide-react';

const AppLayout: React.FC = () => {
    const { user, logout } = useApp();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <aside style={{
                width: '260px',
                backgroundColor: 'var(--bg-secondary)',
                borderRight: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                height: '100vh',
                zIndex: 10
            }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-accent)' }}>DevPrep</h2>
                </div>

                <nav style={{ flex: 1, padding: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `btn ${isActive ? 'btn-primary' : 'btn-outline'}`}
                            style={{ justifyContent: 'flex-start', border: 'none' }}
                        >
                            <LayoutDashboard size={20} />
                            Dashboard
                        </NavLink>
                        <NavLink
                            to="/learn"
                            className={({ isActive }) => `btn ${isActive ? 'btn-primary' : 'btn-outline'}`}
                            style={{ justifyContent: 'flex-start', border: 'none' }}
                        >
                            <BookOpen size={20} />
                            Chapter Learning
                        </NavLink>
                        <NavLink
                            to="/practice"
                            className={({ isActive }) => `btn ${isActive ? 'btn-primary' : 'btn-outline'}`}
                            style={{ justifyContent: 'flex-start', border: 'none' }}
                        >
                            <Code size={20} />
                            Direct Practice
                        </NavLink>
                        <NavLink
                            to="/interview"
                            className={({ isActive }) => `btn ${isActive ? 'btn-primary' : 'btn-outline'}`}
                            style={{ justifyContent: 'flex-start', border: 'none' }}
                        >
                            <Timer size={20} />
                            Interview Mode
                        </NavLink>
                    </div>
                </nav>

                <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', padding: '0.5rem' }}>
                        <div style={{
                            width: '32px', height: '32px', borderRadius: '50%',
                            backgroundColor: 'var(--bg-tertiary)', display: 'flex',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <User size={16} />
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <div style={{ fontSize: '0.875rem', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {user?.name}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'capitalize' }}>
                                {user?.experienceLevel}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="btn btn-outline"
                        style={{ width: '100%', justifyContent: 'flex-start', color: 'var(--accent-danger)', borderColor: 'var(--accent-danger)' }}
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                    <div style={{ marginTop: '1rem', fontSize: '0.7rem', color: 'var(--text-secondary)', textAlign: 'center', opacity: 0.5 }}>
                        v1.0.1 (Deployed: {new Date().toLocaleString()})
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, marginLeft: '260px', padding: '2rem' }}>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AppLayout;
