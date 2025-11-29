import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import type { ExperienceLevel, TechId } from '../../types';
import { technologies } from '../../data/technologies';
import { Code2, Terminal, Database, Check } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
    const { login } = useApp();
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [skills, setSkills] = useState<TechId[]>([]);
    const [level, setLevel] = useState<ExperienceLevel>('fresher');
    const [years, setYears] = useState('0-1 years');

    useEffect(() => {
        switch (level) {
            case 'fresher': setYears('0-1 years'); break;
            case 'entry': setYears('1-3 years'); break;
            case 'mid': setYears('3-5 years'); break;
            case 'senior': setYears('5-8+ years'); break;
        }
    }, [level]);

    const toggleSkill = (id: TechId) => {
        if (skills.includes(id)) {
            setSkills(skills.filter(s => s !== id));
        } else {
            setSkills([...skills, id]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() && designation.trim() && skills.length > 0) {
            login(name, designation, years, level, skills);
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

    const getYearOptions = () => {
        switch (level) {
            case 'fresher': return ['0-1 years'];
            case 'entry': return ['1-3 years'];
            case 'mid': return ['3-5 years'];
            case 'senior': return ['5-8+ years'];
            default: return ['0-1 years'];
        }
    };

    return (
        <div className="flex-center" style={{ minHeight: '100vh', padding: '2rem' }}>
            <div className="card" style={{ maxWidth: '600px', width: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                        Tell Us About Yourself
                    </h1>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Customize your learning path.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label className="label">Full Name</label>
                        <input
                            type="text"
                            className="input"
                            placeholder="e.g. John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label className="label">Designation</label>
                        <input
                            type="text"
                            className="input"
                            placeholder="e.g. Software Engineer"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            required
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label className="label">Primary Skills (Select multiple)</label>
                        <div className="grid-cols-3" style={{ gap: '0.5rem' }}>
                            {technologies.map((t) => (
                                <button
                                    key={t.id}
                                    type="button"
                                    className={`btn ${skills.includes(t.id) ? 'btn-primary' : 'btn-outline'}`}
                                    style={{ flexDirection: 'column', padding: '1rem', gap: '0.5rem', position: 'relative' }}
                                    onClick={() => toggleSkill(t.id)}
                                >
                                    {skills.includes(t.id) && <div style={{ position: 'absolute', top: 5, right: 5 }}><Check size={16} /></div>}
                                    {getIcon(t.id)}
                                    <span>{t.name}</span>
                                </button>
                            ))}
                        </div>
                        {skills.length === 0 && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.5rem' }}>Please select at least one skill.</p>}
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label className="label">Experience Level</label>
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

                    <div style={{ marginBottom: '2rem' }}>
                        <label className="label">Years of Experience</label>
                        <select
                            className="input"
                            value={years}
                            onChange={(e) => setYears(e.target.value)}
                        >
                            {getYearOptions().map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }} disabled={skills.length === 0}>
                        Start Learning
                    </button>
                </form>
            </div>
        </div>
    );
};

export default WelcomeScreen;
