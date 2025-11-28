import type { Chapter } from '../types';

export const chapters: Chapter[] = [
    // SQL Chapters
    {
        id: 'sql-basics',
        techId: 'sql',
        title: 'SQL Basics',
        description: 'Introduction to SELECT, WHERE, and ORDER BY.',
        content: `
# SQL Basics

Structured Query Language (SQL) is the standard language for dealing with Relational Databases.

## SELECT Statement
The \`SELECT\` statement is used to select data from a database.

\`\`\`sql
SELECT column1, column2, ...
FROM table_name;
\`\`\`

## WHERE Clause
The \`WHERE\` clause is used to filter records.

\`\`\`sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
\`\`\`
    `,
        levels: ['fresher', 'entry'],
        order: 1,
    },
    {
        id: 'sql-joins',
        techId: 'sql',
        title: 'Joins',
        description: 'Understanding INNER, LEFT, RIGHT, and FULL joins.',
        content: `
# SQL Joins

A \`JOIN\` clause is used to combine rows from two or more tables, based on a related column between them.

## Types of Joins
*   **(INNER) JOIN**: Returns records that have matching values in both tables
*   **LEFT (OUTER) JOIN**: Returns all records from the left table, and the matched records from the right table
*   **RIGHT (OUTER) JOIN**: Returns all records from the right table, and the matched records from the left table
*   **FULL (OUTER) JOIN**: Returns all records when there is a match in either left or right table
    `,
        levels: ['entry', 'mid', 'senior'],
        order: 2,
    },
    // PL/SQL Chapters
    {
        id: 'plsql-blocks',
        techId: 'plsql',
        title: 'PL/SQL Blocks',
        description: 'Structure of PL/SQL blocks and variables.',
        content: `
# PL/SQL Blocks

PL/SQL is a block-structured language. The basic unit of a PL/SQL source program is the block.

## Block Structure

\`\`\`sql
DECLARE
   -- Declaration section
BEGIN
   -- Execution section
EXCEPTION
   -- Exception handling section
END;
/
\`\`\`
    `,
        levels: ['entry', 'mid'],
        order: 1,
    },
    // Shell Chapters
    {
        id: 'shell-basics',
        techId: 'shell',
        title: 'Shell Basics',
        description: 'Introduction to Shell scripting, variables, and echo.',
        content: `
# Shell Basics

A shell script is a computer program designed to be run by the Unix shell, a command-line interpreter.

## Shebang
The first line of a script typically starts with a shebang (\`#!\`) which tells the system which interpreter to use.

\`\`\`bash
#!/bin/bash
echo "Hello World"
\`\`\`
    `,
        levels: ['fresher', 'entry'],
        order: 1,
    },
];
