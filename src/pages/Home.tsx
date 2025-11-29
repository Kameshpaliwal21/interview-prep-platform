import React from 'react';
import { useApp } from '../context/AppContext';
import { topics } from '../data/topics';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Trophy, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
    const { user } = useApp();

    if (!user) return null;

    // Use first primary skill as current track or default to SQL
    const currentTrack = user.primarySkills.length > 0 ? user.primarySkills[0] : 'sql';

    const totalTopics = topics.filter(t => t.techId === currentTrack).length;

    // For simplicity, let's just show total completed topics vs total topics in current track (approximation)
    // Or better: count completed topics that belong to current track
    const completedTrackTopics = user.completedTopics.filter(tId => {
        const topic = topics.find(t => t.id === tId);
        return topic?.techId === currentTrack;
    }).length;

    const progressPercentage = totalTopics > 0 ? Math.round((completedTrackTopics / totalTopics) * 100) : 0;

    return (
        <div>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    Welcome back, {user.name}!
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    You are currently on the <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{currentTrack.toUpperCase()}</span> track ({user.experienceLevel} level).
                </p>
            </header>

            {/* Stats Grid */}
            <div className="grid-cols-3" style={{ marginBottom: '2rem' }}>
                <div className="card">
                    <div className="flex-between" style={{ marginBottom: '1rem' }}>
                        <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Topics Completed</h3>
                        <BookOpen size={20} color="var(--accent-primary)" />
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        {completedTrackTopics} <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/ {totalTopics}</span>
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
