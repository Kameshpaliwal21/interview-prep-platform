import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { topics } from '../data/topics';
import { questions } from '../data/questions';
import QuestionRunner from '../components/practice/QuestionRunner';
import { ArrowLeft, List, AlertTriangle } from 'lucide-react';

const PracticeDetail: React.FC = () => {
    const { topicId } = useParams<{ topicId: string }>();
    const navigate = useNavigate();
    const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);

    const topic = topics.find(t => t.id === topicId);
    // Filter for HARD questions only
    const hardQuestions = questions.filter(q => q.topicId === topicId && q.difficulty === 'hard');

    if (!topic) {
        return <div>Topic not found</div>;
    }

    return (
        <div style={{ height: 'calc(100vh - 4rem)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button onClick={() => navigate('/practice')} className="btn btn-outline" style={{ padding: '0.5rem' }}>
                    <ArrowLeft size={20} />
                </button>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{topic.title}</h1>
                    <span className="badge badge-blue" style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>Direct Practice (Hard Mode)</span>
                </div>
            </div>

            {hardQuestions.length === 0 ? (
                <div className="card flex-center" style={{ padding: '3rem', flexDirection: 'column', color: 'var(--text-secondary)' }}>
                    <AlertTriangle size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                    <p>No hard questions available for this topic yet.</p>
                </div>
            ) : (
                <div style={{ flex: 1, overflow: 'hidden', display: 'flex', gap: '1rem' }}>
                    {/* Question List Sidebar */}
                    <div className="card" style={{ width: '300px', overflowY: 'auto', padding: '0.5rem' }}>
                        <div style={{ padding: '0.5rem', borderBottom: '1px solid var(--border-color)', marginBottom: '0.5rem', fontWeight: 600 }}>
                            Hard Questions ({hardQuestions.length})
                        </div>
                        {hardQuestions.map((q, index) => (
                            <button
                                key={q.id}
                                className={`btn ${selectedQuestionId === q.id ? 'btn-primary' : 'btn-outline'}`}
                                style={{ width: '100%', justifyContent: 'flex-start', marginBottom: '0.5rem', textAlign: 'left' }}
                                onClick={() => setSelectedQuestionId(q.id)}
                            >
                                <span style={{ marginRight: '0.5rem', opacity: 0.7 }}>{index + 1}.</span>
                                {q.title}
                            </button>
                        ))}
                    </div>

                    {/* Question Solver Area */}
                    <div style={{ flex: 1, overflow: 'hidden' }}>
                        {selectedQuestionId ? (
                            <QuestionRunner
                                question={hardQuestions.find(q => q.id === selectedQuestionId)!}
                                onComplete={() => { }}
                            />
                        ) : (
                            <div className="card flex-center" style={{ height: '100%', flexDirection: 'column', color: 'var(--text-secondary)' }}>
                                <List size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                <p>Select a hard question to start practicing.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PracticeDetail;
