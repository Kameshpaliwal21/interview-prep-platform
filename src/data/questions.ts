import type { Question, TechId, Difficulty, ExperienceLevel } from '../types';
import { sqlQuestionsData } from './sql_questions_json';
import { plsqlQuestionsData } from './plsql_questions_json';
import { shellQuestionsData } from './shell_questions_json';

const generateQuestions = (): Question[] => {
    const questions: Question[] = [];

    const processQuestions = (data: any) => {
        data.questions.forEach((q: any) => {
            let expLevel: ExperienceLevel = 'fresher';
            if (q.difficulty === 'medium') expLevel = 'entry';
            if (q.difficulty === 'hard') expLevel = 'mid';

            questions.push({
                id: q.id,
                techId: q.technology as TechId,
                topicId: q.topicId,
                title: `${q.topicName} - ${q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}`,
                problemStatement: q.question,
                difficulty: q.difficulty as Difficulty,
                experienceLevel: expLevel,
                type: 'coding', // Defaulting to coding/scripting
                tags: [q.topicId, q.difficulty]
            });
        });
    };

    // 1. Import SQL Questions
    processQuestions(sqlQuestionsData);

    // 2. Import PL/SQL Questions
    processQuestions(plsqlQuestionsData);

    // 3. Import Shell Scripting Questions
    processQuestions(shellQuestionsData);

    return questions;
};

export const questions: Question[] = generateQuestions();
