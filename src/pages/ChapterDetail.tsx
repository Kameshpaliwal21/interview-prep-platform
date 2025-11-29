import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { topics } from '../data/topics';
import { questions } from '../data/questions';
import TheoryViewer from '../components/learning/TheoryViewer';
import QuestionRunner from '../components/practice/QuestionRunner';
import { BookOpen, List, ArrowLeft } from 'lucide-react';

const ChapterDetail: React.FC = () => {
    const { topicId } = useParams<{ topicId: string }>();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'theory' | 'questions'>('theory');
    const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);

    const topic = topics.find(t => t.id === topicId);
    const topicQuestions = questions.filter(q => q.topicId === topicId);

    if (!topic) {
        return <div>Topic not found</div>;
    }

    return (
        <div style={{ height: 'calc(100vh - 4rem)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button onClick={() => navigate('/learn')} className="btn btn-outline" style={{ padding: '0.5rem' }}>
                    <ArrowLeft size={20} />
                </button>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{topic.title}</h1>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                <button
                    className={`btn ${activeTab === 'theory' ? 'btn-primary' : 'btn-outline'}`}
                    style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottom: 'none' }}
                    onClick={() => { setActiveTab('theory'); setSelectedQuestionId(null); }}
                >
                    <BookOpen size={18} /> Theory
                </button>
                <button
                    className={`btn ${activeTab === 'questions' ? 'btn-primary' : 'btn-outline'}`}
                    style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottom: 'none' }}
                    onClick={() => setActiveTab('questions')}
                >
                    <List size={18} /> Practice Questions ({topicQuestions.length})
                </button>
            </div>

            {/* Content */}
            <div style={{ flex: 1, overflow: 'hidden' }}>
                {activeTab === 'theory' && (
                    <div className="card" style={{ height: '100%', overflowY: 'auto' }}>
                        <TheoryViewer content={topic.content} />
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <button
                                className="btn btn-primary"
                                onClick={() => setActiveTab('questions')}
                            >
                                Start Practice Questions
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'questions' && (
                    <div style={{ height: '100%', display: 'flex', gap: '1rem' }}>
                        {/* Question List Sidebar */}
                        <div className="card" style={{ width: '300px', overflowY: 'auto', padding: '0.5rem' }}>
                            {topicQuestions.map((q, index) => (
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
                                    question={topicQuestions.find(q => q.id === selectedQuestionId)!}
                                    onComplete={() => { }}
                                />
                            ) : (
                                <div className="card flex-center" style={{ height: '100%', flexDirection: 'column', color: 'var(--text-secondary)' }}>
                                    <List size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                    <p>Select a question from the list to start solving.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChapterDetail;
