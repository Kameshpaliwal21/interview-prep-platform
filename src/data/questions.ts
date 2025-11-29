import type { Question } from '../types';
import { topics } from './topics';

const generateQuestions = (): Question[] => {
    const questions: Question[] = [];
    topics.forEach(topic => {
        // 1 Easy
        questions.push({
            id: `${topic.id}-e1`,
            techId: topic.techId,
            topicId: topic.id,
            title: `Basics of ${topic.title}`,
            problemStatement: `Explain the basic concept of ${topic.title} and provide a simple example.`,
            difficulty: 'easy',
            experienceLevel: 'fresher',
            type: 'theory',
            tags: [topic.id, 'basics']
        });

        // 2 Medium
        for (let i = 1; i <= 2; i++) {
            questions.push({
                id: `${topic.id}-m${i}`,
                techId: topic.techId,
                topicId: topic.id,
                title: `Intermediate ${topic.title} - ${i}`,
                problemStatement: `Solve this intermediate problem related to ${topic.title}. Focus on edge cases.`,
                difficulty: 'medium',
                experienceLevel: 'entry',
                type: 'coding',
                tags: [topic.id, 'intermediate']
            });
        }

        // 2 Hard
        for (let i = 1; i <= 2; i++) {
            questions.push({
                id: `${topic.id}-h${i}`,
                techId: topic.techId,
                topicId: topic.id,
                title: `Advanced ${topic.title} - ${i}`,
                problemStatement: `Solve this complex problem related to ${topic.title}. Optimize for performance.`,
                difficulty: 'hard',
                experienceLevel: 'mid',
                type: 'coding',
                tags: [topic.id, 'advanced']
            });
        }
    });
    return questions;
};

export const questions: Question[] = generateQuestions();
