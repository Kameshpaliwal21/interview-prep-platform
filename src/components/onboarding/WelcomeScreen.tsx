import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import type { ExperienceLevel, TechId } from '../../types';
import { technologies } from '../../data/technologies';
import { Code2, Terminal, Database } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
    const { login } = useApp();
    const [name, setName] = useState('');
    const [level, setLevel] = useState<ExperienceLevel>('entry');
    const [tech, setTech] = useState<TechId>('sql');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            login(name, '', level, tech);
        }
    };

    const getIcon = (id: string) => {
        switch (id) {
            case 'sql': return <Database size={24} />;
            case 'plsql': return <Code2 size={24} />;
            case 'shell': return <Terminal size={24} />;
            default: return <Database size={24} />;
        }
    };

    return (
        <div className="flex-center" style={{ minHeight: '100vh', padding: '2rem' }}>
            <div className="card" style={{ maxWidth: '600px', width: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                        Welcome to DevPrep
                    </h1>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Master SQL, PL/SQL, and Shell Scripting with interactive practice.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                            What should we call you?
                        </label>
                        <input
                            type="text"
                            className="input"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                            Choose your primary focus
                        </label>
                        <div className="grid-cols-3" style={{ gap: '0.5rem' }}>
                            {technologies.map((t) => (
                                <button
                                    key={t.id}
                                    type="button"
                                    className={`btn ${tech === t.id ? 'btn-primary' : 'btn-outline'}`}
                                    style={{ flexDirection: 'column', padding: '1rem', gap: '0.5rem' }}
                                    onClick={() => setTech(t.id)}
                                >
                                    {getIcon(t.id)}
                                    <span>{t.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                            What's your experience level?
                        </label>
                        <div className="grid-cols-2" style={{ gap: '0.5rem' }}>
                            {(['fresher', 'entry', 'mid', 'senior'] as ExperienceLevel[]).map((l) => (
                                <button
                                    key={l}
                                    type="button"
                                    className={`btn ${level === l ? 'btn-primary' : 'btn-outline'}`}
                                    onClick={() => setLevel(l)}
                                    style={{ textTransform: 'capitalize' }}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                        Start Learning
                    </button>
                </form>
            </div>
        </div>
    );
};

export default WelcomeScreen;
