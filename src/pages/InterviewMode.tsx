import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Timer, PlayCircle, AlertTriangle } from 'lucide-react';

const InterviewMode: React.FC = () => {
    const { user } = useApp();
    const [isStarted, setIsStarted] = useState(false);

    if (isStarted) {
        return (
            <div className="flex-center" style={{ height: 'calc(100vh - 4rem)', flexDirection: 'column' }}>
                <div className="card" style={{ maxWidth: '600px', width: '100%', textAlign: 'center', padding: '3rem' }}>
                    <Timer size={64} color="var(--accent-primary)" style={{ marginBottom: '1.5rem' }} />
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Interview in Progress</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        This is a placeholder for the live interview simulation. In the full version, this would present a sequence of timed questions based on your profile.
                    </p>
                    <button className="btn btn-outline" onClick={() => setIsStarted(false)}>
                        End Session
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    Interview Simulation
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Test your skills under pressure with timed assessments.
                </p>
            </header>

            <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Configure Session</h2>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Target Role</label>
                            <input type="text" className="input" defaultValue={`${user?.primaryTech.toUpperCase()} Developer`} />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Duration</label>
                            <select className="input">
                                <option>30 Minutes</option>
                                <option>45 Minutes</option>
                                <option>60 Minutes</option>
                            </select>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Difficulty Mix</label>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <span className="badge badge-green">30% Easy</span>
                                <span className="badge badge-yellow">50% Medium</span>
                                <span className="badge badge-blue">20% Hard</span>
                            </div>
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%', padding: '1rem' }} onClick={() => setIsStarted(true)}>
                            <PlayCircle size={20} /> Start Interview
                        </button>
                    </div>

                    <div style={{ width: '300px', backgroundColor: 'var(--bg-primary)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <AlertTriangle size={18} color="var(--accent-warning)" />
                            What to expect
                        </h3>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>Timed environment</li>
                            <li>No solution hints available</li>
                            <li>Mix of theory and coding</li>
                            <li>Detailed report at the end</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewMode;
