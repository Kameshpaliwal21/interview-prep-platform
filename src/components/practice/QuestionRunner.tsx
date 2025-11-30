import React, { useState, useEffect } from 'react';
import type { Question, JudgeResult } from '../../types';
import { solutions } from '../../data/solutions';
import { useApp } from '../../context/AppContext';
import ReactMarkdown from 'react-markdown';
import { Check, Play, Lightbulb, Bot, AlertCircle, Terminal } from 'lucide-react';
import Timer from './Timer';
import CodeEditor from './CodeEditor';
import { JudgeService } from '../../services/JudgeService';

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

    // Judge State
    const [isRunning, setIsRunning] = useState(false);
    const [judgeResult, setJudgeResult] = useState<JudgeResult | null>(null);

    // Reset state when question changes
    useEffect(() => {
        setCode('');
        setIsSubmitted(false);
        setActiveTab('problem');
        setAiHint(null);
        setJudgeResult(null);
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

    const handleRun = async () => {
        setIsRunning(true);
        setJudgeResult(null);
        try {
            const result = await JudgeService.runCode(question.id, question.techId, code);
            setJudgeResult(result);
        } catch (error) {
            console.error(error);
            setJudgeResult({ status: 'error', output: 'An error occurred while running the code.' });
        } finally {
            setIsRunning(false);
        }
    };

    const handleSubmit = async () => {
        if (isSubmitted) return;
        setIsRunning(true);
        setJudgeResult(null);
        try {
            const result = await JudgeService.submitCode(question.id, question.techId, code);
            setJudgeResult(result);

            if (result.overallPassed) {
                setIsSubmitted(true);
                updateProgress(question.id);
                // Don't auto-switch tab, let user see success
                // setActiveTab('solution'); 
                // onComplete(); // Maybe wait for user to click "Next" or something? 
                // For now, let's keep existing behavior but maybe delay it or show a success modal?
                // The requirement says "Display Overall pass/fail", so we should show that first.
            }
        } catch (error) {
            console.error(error);
            setJudgeResult({ status: 'error', output: 'An error occurred while submitting the code.' });
        } finally {
            setIsRunning(false);
        }
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
                <div className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
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

                    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                        <CodeEditor
                            value={code}
                            onChange={setCode}
                            language={question.techId}
                            readOnly={isSubmitted || isRunning}
                            height="100%"
                        />
                    </div>

                    {/* Results Section */}
                    {judgeResult && (
                        <div style={{ marginTop: '1rem', maxHeight: '200px', overflowY: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '0.5rem' }}>
                            {judgeResult.status === 'syntax_error' && (
                                <div style={{ color: 'var(--error-color)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                    <AlertCircle size={16} style={{ marginTop: '2px' }} />
                                    <div>
                                        <strong>Syntax Error:</strong> Line {judgeResult.error?.line}, Col {judgeResult.error?.column}: {judgeResult.error?.message}
                                    </div>
                                </div>
                            )}

                            {judgeResult.status === 'success' && judgeResult.output && (
                                <div>
                                    <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Terminal size={14} /> Output
                                    </h4>
                                    <pre style={{ backgroundColor: 'var(--bg-primary)', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem', whiteSpace: 'pre-wrap' }}>
                                        {judgeResult.output}
                                    </pre>
                                </div>
                            )}

                            {judgeResult.testResults && (
                                <div style={{ marginTop: '0.5rem' }}>
                                    <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>Test Results</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {judgeResult.testResults.map((tr, idx) => (
                                            <div key={idx} style={{
                                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                                padding: '0.5rem', borderRadius: '4px',
                                                backgroundColor: tr.passed ? 'rgba(var(--success-rgb), 0.1)' : 'rgba(var(--error-rgb), 0.1)',
                                                border: `1px solid ${tr.passed ? 'var(--success-color)' : 'var(--error-color)'}`
                                            }}>
                                                {tr.passed ? <Check size={16} color="var(--success-color)" /> : <AlertCircle size={16} color="var(--error-color)" />}
                                                <span style={{ fontSize: '0.875rem' }}>Test Case {idx + 1}: {tr.passed ? 'Passed' : 'Failed'}</span>
                                                {!tr.passed && tr.message && <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>- {tr.message}</span>}
                                            </div>
                                        ))}
                                    </div>
                                    {judgeResult.overallPassed && (
                                        <div style={{ marginTop: '0.5rem', color: 'var(--success-color)', fontWeight: 600, textAlign: 'center' }}>
                                            All Test Cases Passed!
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                        <button className="btn btn-secondary" onClick={handleRun} disabled={isSubmitted || isRunning}>
                            <Play size={16} /> {isRunning ? 'Running...' : 'Run'}
                        </button>
                        {isSubmitted ? (
                            <button className="btn btn-outline" onClick={() => askAI('review')} disabled={isAiThinking}>
                                <Bot size={16} /> Ask AI to Review
                            </button>
                        ) : (
                            <button className="btn btn-primary" onClick={handleSubmit} disabled={isRunning}>
                                <Check size={16} /> {isRunning ? 'Submitting...' : 'Submit'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionRunner;
