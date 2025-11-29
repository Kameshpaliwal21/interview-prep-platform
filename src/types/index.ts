export type ExperienceLevel = 'fresher' | 'entry' | 'mid' | 'senior';
export type TechId = 'sql' | 'plsql' | 'shell';
export type QuestionType = 'mcq' | 'coding' | 'theory' | 'scenario';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface User {
    id: string;
    name: string;
    designation: string;
    yearsOfExperience: string;
    experienceLevel: ExperienceLevel;
    primarySkills: TechId[];
    completedTopics: string[]; // topicIds
    completedQuestions: string[]; // questionIds
    score: number;
}

export interface Technology {
    id: TechId;
    name: string;
    description: string;
}

export interface Topic {
    id: string;
    techId: TechId;
    title: string;
    description: string;
    content: string; // Markdown content
    levels: ExperienceLevel[];
    order: number;
}

export interface Question {
    id: string;
    techId: TechId;
    topicId?: string; // Renamed from chapterId
    title: string;
    problemStatement: string;
    inputExample?: string;
    outputExample?: string;
    difficulty: Difficulty;
    experienceLevel: ExperienceLevel;
    type: QuestionType;
    tags: string[];
}

export interface Solution {
    id: string;
    questionId: string;
    type: 'basic' | 'optimized' | 'best_practice';
    code: string;
    explanation: string; // Markdown or HTML
    keyPoints: string[];
}

export interface Attempt {
    id: string;
    userId: string;
    questionId: string;
    userCode: string;
    status: 'correct' | 'incorrect' | 'partially_correct' | 'skipped';
    timeTaken: number; // seconds
    viewedSolution: boolean;
    timestamp: number;
}
