import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { topics } from '../data/topics';
import { Link } from 'react-router-dom';
import { ChevronRight, Database, Code2, Terminal, Zap } from 'lucide-react';
import type { TechId } from '../types';

const PracticeMode: React.FC = () => {
    const { user } = useApp();
    const [selectedTech, setSelectedTech] = useState<TechId | null>(null);

    if (!user) return null;

    if (!selectedTech && user.primarySkills.length > 0) {
        setSelectedTech(user.primarySkills[0]);
    }

    const currentTech = selectedTech || 'sql';

    const userTopics = topics
        .filter(t => t.techId === currentTech)
        .sort((a, b) => a.order - b.order);

    const getIcon = (id: string) => {
        switch (id) {
            case 'sql': return <Database size={20} />;
            case 'plsql': return <Code2 size={20} />;
            case 'shell': return <Terminal size={20} />;
            default: return <Database size={20} />;
        }
    };

    return (
        <div>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    Direct Practice
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Challenge yourself with hard-level questions for specific topics.
                </p>
            </header>

            {/* Tech Selector */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                {(['sql', 'plsql', 'shell'] as TechId[]).map(tech => (
                    <button
                        key={tech}
                        className={`btn ${currentTech === tech ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setSelectedTech(tech)}
                        style={{ textTransform: 'uppercase', gap: '0.5rem' }}
                    >
                        {getIcon(tech)}
                        {tech}
                    </button>
                ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {userTopics.map((topic) => {
                    return (
                        <Link
                            key={topic.id}
                            to={`/practice/${topic.id}`}
                            className="card"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '1.5rem',
                                transition: 'border-color 0.2s',
                                borderLeft: '4px solid var(--accent-primary)'
                            }}
                        >
                            <div style={{ marginRight: '1.5rem' }}>
                                <Zap size={24} color="var(--accent-primary)" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                                    {topic.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                                    {topic.description}
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

export default PracticeMode;
