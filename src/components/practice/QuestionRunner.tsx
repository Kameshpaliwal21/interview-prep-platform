import React, { useState, useEffect } from 'react';
import type { Question } from '../../types';
import { solutions } from '../../data/solutions';
import { useApp } from '../../context/AppContext';
import ReactMarkdown from 'react-markdown';
import { Check, Play, Lightbulb, Bot } from 'lucide-react';
import Timer from './Timer';

interface QuestionRunnerProps {
    question: Question;
    onComplete: () => void;
}

const QuestionRunner: React.FC<QuestionRunnerProps> = ({ question, onComplete }) => {
    const { updateProgress } = useApp();
    const [code, setCode] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('problem');
    const [aiHint, setAiHint] = useState<string | null>(null);
    const [isAiThinking, setIsAiThinking] = useState(false);

    // Reset state when question changes
    useEffect(() => {
        setCode('');
        setIsSubmitted(false);
        setActiveTab('problem');
        setAiHint(null);
    }, [question.id]);

    const questionSolutions = solutions.filter(s => s.questionId === question.id);
    const basicSolution = questionSolutions.find(s => s.type === 'basic');
    const optimizedSolution = questionSolutions.find(s => s.type === 'optimized');

    const getDuration = () => {
        switch (question.difficulty) {
            case 'easy': return 10 * 60; // 10 mins
            case 'medium': return 20 * 60; // 20 mins
            case 'hard': return 30 * 60; // 30 mins
            default: return 10 * 60;
        }
    };

    const handleRun = () => {
        alert('Code executed! (Simulation)');
    };

    const handleSubmit = () => {
        if (isSubmitted) return;
        setIsSubmitted(true);
        updateProgress(question.id);
        setActiveTab('solution');
        onComplete();
    };

    const handleTimeUp = () => {
        if (!isSubmitted) {
            alert('Time is up! Auto-submitting.');
            handleSubmit();
        }
    };

    const askAI = (mode: 'hint' | 'review') => {
        setIsAiThinking(true);
        setTimeout(() => {
            setIsAiThinking(false);
            if (mode === 'hint') {
                setAiHint(`Here is a hint for ${question.title}: Try breaking down the problem into smaller steps. Consider using ${question.techId === 'sql' ? 'a subquery' : 'a loop'}.`);
            } else {
                setAiHint(`AI Review: Your approach seems valid, but check for edge cases. The optimized solution uses a more efficient algorithm.`);
            }
        }, 1500);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
            {/* Header */}
            <div className="card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{question.title}</h2>
                    <span className={`badge ${question.difficulty === 'easy' ? 'badge-green' : question.difficulty === 'medium' ? 'badge-yellow' : 'badge-blue'}`}>
                        {question.difficulty}
                    </span>
                </div>
                <Timer
                    durationSeconds={getDuration()}
                    onTimeUp={handleTimeUp}
                    isActive={!isSubmitted}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', flex: 1, minHeight: 0 }}>
                {/* Left Panel: Problem / Solution */}
                <div className="card" style={{ overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ borderBottom: '1px solid var(--border-color)', marginBottom: '1rem', paddingBottom: '0.5rem', display: 'flex', gap: '1rem' }}>
                        <button
                            className={`btn ${activeTab === 'problem' ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setActiveTab('problem')}
                            style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}
                        >
                            Problem
                        </button>
                        {isSubmitted && (
                            <button
                                className={`btn ${activeTab === 'solution' ? 'btn-primary' : 'btn-outline'}`}
                                onClick={() => setActiveTab('solution')}
                                style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}
                            >
                                Solution
                            </button>
                        )}
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto' }}>
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
                                    <pre><code>{basicSolution?.code || '// No basic solution provided'}</code></pre>
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
                </div>

                {/* Right Panel: Editor */}
                <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem', display: 'flex', justifyContent: 'space-between' }}>
                        <span>Your Solution ({question.techId.toUpperCase()})</span>
                        {!isSubmitted && (
                            <button className="btn btn-ghost" onClick={() => askAI('hint')} disabled={isAiThinking} style={{ padding: '0 0.5rem', fontSize: '0.8rem' }}>
                                <Bot size={14} style={{ marginRight: '4px' }} />
                                {isAiThinking ? 'Thinking...' : 'Get Hint'}
                            </button>
                        )}
                    </div>

                    {aiHint && (
                        <div className="alert" style={{ marginBottom: '1rem', fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
                            <Bot size={20} />
                            <div>{aiHint}</div>
                        </div>
                    )}

                    <textarea
                        className="input"
                        style={{ flex: 1, fontFamily: 'var(--font-mono)', resize: 'none', minHeight: '300px' }}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Write your code here..."
                        disabled={isSubmitted}
                    />
                    <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                        <button className="btn btn-secondary" onClick={handleRun} disabled={isSubmitted}>
                            <Play size={16} /> Run
                        </button>
                        {isSubmitted ? (
                            <button className="btn btn-outline" onClick={() => askAI('review')} disabled={isAiThinking}>
                                <Bot size={16} /> Ask AI to Review
                            </button>
                        ) : (
                            <button className="btn btn-primary" onClick={handleSubmit}>
                                <Check size={16} /> Submit
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionRunner;
