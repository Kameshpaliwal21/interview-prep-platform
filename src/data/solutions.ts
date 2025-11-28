import type { Solution } from '../types';

export const solutions: Solution[] = [
    // SQL Select Solution
    {
        id: 'sol-sql-select-1-basic',
        questionId: 'q-sql-select-1',
        type: 'basic',
        code: 'SELECT * FROM employees;',
        explanation: 'The `*` wildcard selects all columns from the specified table.',
        keyPoints: ['Use `*` for all columns', 'Specify table name after `FROM`'],
    },
    // SQL Join Solution
    {
        id: 'sol-sql-join-1-basic',
        questionId: 'q-sql-join-1',
        type: 'basic',
        code: `SELECT e.name, d.name
FROM employees e
JOIN departments d ON e.dept_id = d.id;`,
        explanation: 'We use an `INNER JOIN` (default `JOIN`) to match rows where the `dept_id` in employees matches the `id` in departments.',
        keyPoints: ['Use aliases for readability', 'INNER JOIN excludes unmatched rows'],
    },
    {
        id: 'sol-sql-join-1-optimized',
        questionId: 'q-sql-join-1',
        type: 'optimized',
        code: `SELECT e.name AS employee_name, d.name AS department_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;`,
        explanation: 'Explicitly stating `INNER JOIN` improves readability. Using clear aliases for output columns is best practice.',
        keyPoints: ['Explicit syntax', 'Column aliasing'],
    },
    // PL/SQL Solution
    {
        id: 'sol-plsql-hello-basic',
        questionId: 'q-plsql-hello',
        type: 'basic',
        code: `BEGIN
  DBMS_OUTPUT.PUT_LINE('Hello, PL/SQL!');
END;
/`,
        explanation: '`DBMS_OUTPUT.PUT_LINE` is the standard procedure to print output to the console in PL/SQL.',
        keyPoints: ['BEGIN...END block', 'DBMS_OUTPUT package'],
    },
    // Shell Solution
    {
        id: 'sol-shell-echo-basic',
        questionId: 'q-shell-echo',
        type: 'basic',
        code: 'whoami',
        explanation: 'The `whoami` command prints the effective username of the current user.',
        keyPoints: ['Built-in command', 'Simple and direct'],
    },
];
