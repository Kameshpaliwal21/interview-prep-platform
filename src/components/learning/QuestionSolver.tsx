import React, { useState } from 'react';
import type { Question } from '../../types';
import { solutions } from '../../data/solutions';
import { useApp } from '../../context/AppContext';
import ReactMarkdown from 'react-markdown';
import { Check, Play, Lightbulb } from 'lucide-react';

interface QuestionSolverProps {
    question: Question;
    onComplete: () => void;
}

const QuestionSolver: React.FC<QuestionSolverProps> = ({ question, onComplete }) => {
    const { updateProgress } = useApp();
    const [code, setCode] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('problem');

    const questionSolutions = solutions.filter(s => s.questionId === question.id);
    const basicSolution = questionSolutions.find(s => s.type === 'basic');
    const optimizedSolution = questionSolutions.find(s => s.type === 'optimized');

    const handleRun = () => {
        // In a real app, this would send code to a backend.
        // Here we just simulate a "check"
        alert('Code executed! (Simulation)');
    };

    const handleSubmit = () => {
        updateProgress(question.id);
        setShowSolution(true);
        setActiveTab('solution');
        onComplete();
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
            {/* Header */}
            <div className="card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{question.title}</h2>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span className={`badge ${question.difficulty === 'easy' ? 'badge-green' : question.difficulty === 'medium' ? 'badge-yellow' : 'badge-blue'}`}>
                        {question.difficulty}
                    </span>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', flex: 1 }}>
                {/* Left Panel: Problem / Solution */}
                <div className="card" style={{ overflowY: 'auto', maxHeight: '600px' }}>
                    <div style={{ borderBottom: '1px solid var(--border-color)', marginBottom: '1rem', paddingBottom: '0.5rem', display: 'flex', gap: '1rem' }}>
                        <button
                            className={`btn ${activeTab === 'problem' ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setActiveTab('problem')}
                            style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}
                        >
                            Problem
                        </button>
                        {showSolution && (
                            <button
                                className={`btn ${activeTab === 'solution' ? 'btn-primary' : 'btn-outline'}`}
                                onClick={() => setActiveTab('solution')}
                                style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}
                            >
                                Solution
                            </button>
                        )}
                    </div>

                    {activeTab === 'problem' ? (
                        <div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Problem Statement</h3>
                            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>{question.problemStatement}</p>

                            {question.inputExample && (
                                <div style={{ marginBottom: '1rem' }}>
                                    <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-secondary)' }}>Input Example:</h4>
                                    <pre style={{ backgroundColor: 'var(--bg-primary)', padding: '0.5rem', borderRadius: '4px', fontSize: '0.875rem' }}>{question.inputExample}</pre>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="markdown-content">
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ color: 'var(--accent-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Check size={20} /> Basic Solution
                                </h3>
                                <pre><code>{basicSolution?.code}</code></pre>
                                <ReactMarkdown>{basicSolution?.explanation || ''}</ReactMarkdown>
                            </div>

                            {optimizedSolution && (
                                <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                                    <h3 style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Lightbulb size={20} /> Optimized Approach
                                    </h3>
                                    <pre><code>{optimizedSolution.code}</code></pre>
                                    <ReactMarkdown>{optimizedSolution.explanation}</ReactMarkdown>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Right Panel: Editor */}
                <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                        Your Solution ({question.techId.toUpperCase()})
                    </div>
                    <textarea
                        className="input"
                        style={{ flex: 1, fontFamily: 'var(--font-mono)', resize: 'none', minHeight: '300px' }}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Write your code here..."
                    />
                    <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                        <button className="btn btn-secondary" onClick={handleRun}>
                            <Play size={16} /> Run
                        </button>
                        <button className="btn btn-primary" onClick={handleSubmit}>
                            <Check size={16} /> Submit / Mark Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionSolver;
