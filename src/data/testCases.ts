import { TestCase } from '../types';

export const sqlTestCases: Record<string, TestCase[]> = {
    'sql-basic-1': [
        {
            id: 'tc1',
            description: 'Select all columns for employee with ID 1',
            expectedOutput: '1 | John Doe | Developer | 60000',
            isHidden: false
        },
        {
            id: 'tc2',
            description: 'Verify column names',
            expectedOutput: 'id, name, role, salary',
            isHidden: true
        }
    ],
    'sql-join-1': [
        {
            id: 'tc1',
            description: 'Join employees and departments',
            expectedOutput: 'John Doe | IT\nJane Smith | HR',
            isHidden: false
        }
    ]
};

export const shellTestCases: Record<string, TestCase[]> = {
    'shell-basic-1': [
        {
            id: 'tc1',
            description: 'Print "Hello World"',
            expectedOutput: 'Hello World',
            isHidden: false
        }
    ]
};

export const getTestCases = (questionId: string, techId: string): TestCase[] => {
    if (techId === 'sql' || techId === 'plsql') {
        return sqlTestCases[questionId] || [];
    }
    return shellTestCases[questionId] || [];
};
