import React from 'react';
import { useApp } from '../context/AppContext';
import { chapters } from '../data/chapters';
import { Link } from 'react-router-dom';
import { CheckCircle, Circle, ChevronRight } from 'lucide-react';

const ChapterMode: React.FC = () => {
    const { user } = useApp();

    if (!user) return null;

    const userChapters = chapters
        .filter(c => c.techId === user.primaryTech)
        .sort((a, b) => a.order - b.order);

    return (
        <div>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    Chapter-wise Learning
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Follow the structured path to master {user.primaryTech.toUpperCase()}.
                </p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {userChapters.map((chapter) => {
                    const isCompleted = user.completedChapters.includes(chapter.id);
                    return (
                        <Link
                            key={chapter.id}
                            to={`/learn/${chapter.id}`}
                            className="card"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '1.5rem',
                                transition: 'border-color 0.2s',
                                borderLeft: `4px solid ${isCompleted ? 'var(--accent-secondary)' : 'var(--accent-primary)'}`
                            }}
                        >
                            <div style={{ marginRight: '1.5rem' }}>
                                {isCompleted ? (
                                    <CheckCircle size={24} color="var(--accent-secondary)" />
                                ) : (
                                    <Circle size={24} color="var(--text-secondary)" />
                                )}
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                                    {chapter.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                                    {chapter.description}
                                </p>
                            </div>
                            <div>
                                <ChevronRight size={20} color="var(--text-secondary)" />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default ChapterMode;
