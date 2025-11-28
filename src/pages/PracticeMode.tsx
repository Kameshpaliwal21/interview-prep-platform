import React, { useState } from 'react';
import { questions } from '../data/questions';
import { useApp } from '../context/AppContext';
import QuestionSolver from '../components/learning/QuestionSolver';
import { Filter, Code } from 'lucide-react';
import type { Difficulty, TechId } from '../types';

const PracticeMode: React.FC = () => {
    const { user } = useApp();
    const [selectedTech, setSelectedTech] = useState<TechId | 'all'>(user?.primaryTech || 'sql');
    const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
    const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);

    const filteredQuestions = questions.filter(q => {
        if (selectedTech !== 'all' && q.techId !== selectedTech) return false;
        if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
        return true;
    });

    return (
        <div style={{ height: 'calc(100vh - 4rem)', display: 'flex', flexDirection: 'column' }}>
            <header style={{ marginBottom: '1.5rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    Direct Coding Practice
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Sharpen your skills with targeted coding problems.
                </p>
            </header>

            {/* Filters */}
            <div className="card" style={{ padding: '1rem', marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                    <Filter size={20} />
                    <span style={{ fontWeight: 500 }}>Filters:</span>
                </div>

                <select
                    className="input"
                    style={{ width: 'auto' }}
                    value={selectedTech}
                    onChange={(e) => setSelectedTech(e.target.value as TechId | 'all')}
                >
                    <option value="all">All Technologies</option>
                    <option value="sql">SQL</option>
                    <option value="plsql">PL/SQL</option>
                    <option value="shell">Shell Scripting</option>
                </select>

                <select
                    className="input"
                    style={{ width: 'auto' }}
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
                >
                    <option value="all">All Difficulties</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, display: 'flex', gap: '1rem', overflow: 'hidden' }}>
                {/* List */}
                <div className="card" style={{ width: '350px', overflowY: 'auto', padding: '0.5rem' }}>
                    {filteredQuestions.length === 0 ? (
                        <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                            No questions match your filters.
                        </div>
                    ) : (
                        filteredQuestions.map((q) => (
                            <button
                                key={q.id}
                                className={`btn ${selectedQuestionId === q.id ? 'btn-primary' : 'btn-outline'}`}
                                style={{
                                    width: '100%',
                                    justifyContent: 'flex-start',
                                    marginBottom: '0.5rem',
                                    textAlign: 'left',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: '0.25rem',
                                    padding: '0.75rem'
                                }}
                                onClick={() => setSelectedQuestionId(q.id)}
                            >
                                <div style={{ fontWeight: 600 }}>{q.title}</div>
                                <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem' }}>
                                    <span className={`badge ${q.difficulty === 'easy' ? 'badge-green' : q.difficulty === 'medium' ? 'badge-yellow' : 'badge-blue'}`} style={{ padding: '0.1rem 0.4rem' }}>
                                        {q.difficulty}
                                    </span>
                                    <span style={{ opacity: 0.7 }}>{q.techId.toUpperCase()}</span>
                                </div>
                            </button>
                        ))
                    )}
                </div>

                {/* Solver */}
                <div style={{ flex: 1, overflow: 'hidden' }}>
                    {selectedQuestionId ? (
                        <QuestionSolver
                            question={filteredQuestions.find(q => q.id === selectedQuestionId)!}
                            onComplete={() => { }}
                        />
                    ) : (
                        <div className="card flex-center" style={{ height: '100%', flexDirection: 'column', color: 'var(--text-secondary)' }}>
                            <Code size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                            <p>Select a question to start coding.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PracticeMode;
