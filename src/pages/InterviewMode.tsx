import React, { useState } from 'react';
import { questions } from '../data/questions';
import QuestionRunner from '../components/practice/QuestionRunner';
import { Play, CheckCircle, ArrowRight } from 'lucide-react';
import type { TechId, Difficulty, Question } from '../types';

const InterviewMode: React.FC = () => {
    const [isConfiguring, setIsConfiguring] = useState(true);
    const [selectedTech, setSelectedTech] = useState<TechId | 'all'>('all');
    const [difficulty, setDifficulty] = useState<Difficulty | 'mixed'>('mixed');
    const [questionCount, setQuestionCount] = useState(5);

    const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isQuizComplete, setIsQuizComplete] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);

    const startQuiz = () => {
        let filtered = questions;
        if (selectedTech !== 'all') {
            filtered = filtered.filter(q => q.techId === selectedTech);
        }
        if (difficulty !== 'mixed') {
            filtered = filtered.filter(q => q.difficulty === difficulty);
        }

        // Shuffle and slice
        const shuffled = [...filtered].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, questionCount);

        if (selected.length === 0) {
            alert('No questions found matching criteria.');
            return;
        }

        setQuizQuestions(selected);
        setCurrentQuestionIndex(0);
        setIsQuizComplete(false);
        setIsConfiguring(false);
        setShowNextButton(false);
    };

    const handleQuestionComplete = () => {
        setShowNextButton(true);
    };

    const handleNext = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setShowNextButton(false);
        } else {
            setIsQuizComplete(true);
        }
    };

    if (isConfiguring) {
        return (
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                        Interview Simulation
                    </h1>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Configure your mock interview session.
                    </p>
                </header>

                <div className="card" style={{ padding: '2rem' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label className="label">Technology</label>
                        <select
                            className="input"
                            value={selectedTech}
                            onChange={(e) => setSelectedTech(e.target.value as TechId | 'all')}
                        >
                            <option value="all">All Technologies</option>
                            <option value="sql">SQL</option>
                            <option value="plsql">PL/SQL</option>
                            <option value="shell">Shell Scripting</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label className="label">Difficulty</label>
                        <select
                            className="input"
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value as Difficulty | 'mixed')}
                        >
                            <option value="mixed">Mixed</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label className="label">Number of Questions</label>
                        <select
                            className="input"
                            value={questionCount}
                            onChange={(e) => setQuestionCount(Number(e.target.value))}
                        >
                            <option value={3}>3 Questions</option>
                            <option value={5}>5 Questions</option>
                            <option value={10}>10 Questions</option>
                        </select>
                    </div>

                    <button className="btn btn-primary" style={{ width: '100%', padding: '1rem' }} onClick={startQuiz}>
                        <Play size={20} /> Start Interview
                    </button>
                </div>
            </div>
        );
    }

    if (isQuizComplete) {
        return (
            <div className="flex-center" style={{ height: 'calc(100vh - 4rem)', flexDirection: 'column' }}>
                <div className="card" style={{ padding: '3rem', textAlign: 'center', maxWidth: '500px' }}>
                    <CheckCircle size={64} color="var(--accent-secondary)" style={{ marginBottom: '1.5rem' }} />
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Interview Complete!</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        You have completed {quizQuestions.length} questions. Check your progress in the dashboard.
                    </p>
                    <button className="btn btn-primary" onClick={() => setIsConfiguring(true)}>
                        Start New Session
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];

    return (
        <div style={{ height: 'calc(100vh - 4rem)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </h2>
                <button className="btn btn-outline" onClick={() => setIsConfiguring(true)}>
                    Exit Interview
                </button>
            </div>

            <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1, overflow: 'hidden' }}>
                    <QuestionRunner
                        key={currentQuestion.id} // Force remount on question change
                        question={currentQuestion}
                        onComplete={handleQuestionComplete}
                    />
                </div>

                {showNextButton && (
                    <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end' }}>
                        <button className="btn btn-primary" onClick={handleNext} style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'Finish Interview'} <ArrowRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InterviewMode;
