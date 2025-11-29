import type { Solution } from '../types';
import { questions } from './questions';

const generateSolutions = (): Solution[] => {
    const solutions: Solution[] = [];
    questions.forEach(q => {
        // Basic Solution
        solutions.push({
            id: `sol-${q.id}-basic`,
            questionId: q.id,
            type: 'basic',
            code: `// Basic solution for ${q.title}\n// Implement logic here...`,
            explanation: `This is a basic explanation for **${q.title}**.\n\nIt solves the problem directly.`,
            keyPoints: ['Simple approach', 'Direct implementation']
        });

        // Optimized Solution for Medium/Hard
        if (q.difficulty !== 'easy') {
            solutions.push({
                id: `sol-${q.id}-optimized`,
                questionId: q.id,
                type: 'optimized',
                code: `// Optimized solution for ${q.title}\n// Uses better algorithm...`,
                explanation: `This is an optimized explanation for **${q.title}**.\n\nIt improves time/space complexity.`,
                keyPoints: ['Better complexity', 'Efficient resource usage']
            });
        }
    });
    return solutions;
};

export const solutions: Solution[] = generateSolutions();
