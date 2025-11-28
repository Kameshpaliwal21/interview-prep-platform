import React from 'react';
import { useApp } from '../context/AppContext';
import { chapters } from '../data/chapters';

import { Link } from 'react-router-dom';
import { BookOpen, Code, Trophy, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
    const { user } = useApp();

    if (!user) return null;

    const totalChapters = chapters.filter(c => c.techId === user.primaryTech).length;
    const completedChaptersCount = user.completedChapters.length;
    const progressPercentage = totalChapters > 0 ? Math.round((completedChaptersCount / totalChapters) * 100) : 0;

    return (
        <div>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    Welcome back, {user.name}!
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    You are currently on the <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{user.primaryTech.toUpperCase()}</span> track ({user.experienceLevel} level).
                </p>
            </header>

            {/* Stats Grid */}
            <div className="grid-cols-3" style={{ marginBottom: '2rem' }}>
                <div className="card">
                    <div className="flex-between" style={{ marginBottom: '1rem' }}>
                        <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Chapters Completed</h3>
                        <BookOpen size={20} color="var(--accent-primary)" />
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        {completedChaptersCount} <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/ {totalChapters}</span>
                    </div>
                    <div style={{ marginTop: '0.5rem', height: '4px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '2px' }}>
                        <div style={{ width: `${progressPercentage}%`, height: '100%', backgroundColor: 'var(--accent-primary)', borderRadius: '2px' }} />
                    </div>
                </div>

                <div className="card">
                    <div className="flex-between" style={{ marginBottom: '1rem' }}>
                        <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Questions Solved</h3>
                        <Code size={20} color="var(--accent-secondary)" />
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        {user.completedQuestions.length}
                    </div>
                </div>

                <div className="card">
                    <div className="flex-between" style={{ marginBottom: '1rem' }}>
                        <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Current Score</h3>
                        <Trophy size={20} color="var(--accent-warning)" />
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        {user.score}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Continue Learning</h2>
            <div className="grid-cols-2">
                <Link to="/learn" className="card" style={{ display: 'block', transition: 'transform 0.2s' }}>
                    <div className="flex-between" style={{ marginBottom: '1rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <BookOpen size={24} color="var(--accent-primary)" />
                        </div>
                        <ArrowRight size={20} color="var(--text-secondary)" />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Chapter-wise Learning</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Master concepts one by one with theory and practice.</p>
                </Link>

                <Link to="/practice" className="card" style={{ display: 'block', transition: 'transform 0.2s' }}>
                    <div className="flex-between" style={{ marginBottom: '1rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Code size={24} color="var(--accent-secondary)" />
                        </div>
                        <ArrowRight size={20} color="var(--text-secondary)" />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Direct Practice</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Jump straight into coding problems filtered by difficulty.</p>
                </Link>
            </div>
        </div>
    );
};

export default Home;
