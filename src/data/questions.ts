import type { Question } from '../types';

export const questions: Question[] = [
    // SQL Questions
    {
        id: 'q-sql-select-1',
        techId: 'sql',
        chapterId: 'sql-basics',
        title: 'Select All Employees',
        problemStatement: 'Write a query to select all columns from the `employees` table.',
        difficulty: 'easy',
        experienceLevel: 'fresher',
        type: 'coding',
        tags: ['select', 'basics'],
    },
    {
        id: 'q-sql-join-1',
        techId: 'sql',
        chapterId: 'sql-joins',
        title: 'Employee Departments',
        problemStatement: 'Write a query to find the name of the department for each employee. Return `employee_name` and `department_name`. Tables: `employees` (id, name, dept_id), `departments` (id, name).',
        difficulty: 'medium',
        experienceLevel: 'entry',
        type: 'coding',
        tags: ['joins', 'inner-join'],
    },
    // PL/SQL Questions
    {
        id: 'q-plsql-hello',
        techId: 'plsql',
        chapterId: 'plsql-blocks',
        title: 'Hello World Block',
        problemStatement: 'Write an anonymous PL/SQL block that prints "Hello, PL/SQL!" to the output.',
        difficulty: 'easy',
        experienceLevel: 'entry',
        type: 'coding',
        tags: ['basics', 'dbms_output'],
    },
    // Shell Questions
    {
        id: 'q-shell-echo',
        techId: 'shell',
        chapterId: 'shell-basics',
        title: 'Print Current User',
        problemStatement: 'Write a shell script command to print the name of the current logged-in user.',
        difficulty: 'easy',
        experienceLevel: 'fresher',
        type: 'coding',
        tags: ['basics', 'commands'],
    },
];
