export const sqlQuestionsData = {
    "technology": "sql",
    "topics": [
        {
            "id": "sql-intro",
            "name": "Introduction to SQL & Relational Databases"
        },
        {
            "id": "sql-data-types",
            "name": "SQL Data Types"
        },
        {
            "id": "sql-select-basics",
            "name": "Basic SELECT & FROM"
        },
        {
            "id": "sql-where",
            "name": "WHERE & Filtering"
        },
        {
            "id": "sql-order-by",
            "name": "ORDER BY & Sorting"
        },
        {
            "id": "sql-distinct",
            "name": "DISTINCT & Removing Duplicates"
        },
        {
            "id": "sql-limit",
            "name": "Row Limiting & Pagination"
        },
        {
            "id": "sql-aggregate-functions",
            "name": "Aggregate Functions"
        },
        {
            "id": "sql-group-by",
            "name": "GROUP BY"
        },
        {
            "id": "sql-having",
            "name": "HAVING Clause"
        },
        {
            "id": "sql-joins",
            "name": "Joins (INNER/LEFT/RIGHT/FULL)"
        },
        {
            "id": "sql-self-join",
            "name": "Self Joins"
        },
        {
            "id": "sql-subqueries",
            "name": "Subqueries"
        },
        {
            "id": "sql-set-ops",
            "name": "Set Operations (UNION/INTERSECT/MINUS)"
        },
        {
            "id": "sql-functions",
            "name": "String/Date/Numeric Functions"
        },
        {
            "id": "sql-case",
            "name": "CASE Expressions"
        },
        {
            "id": "sql-dml",
            "name": "INSERT, UPDATE, DELETE"
        },
        {
            "id": "sql-ddl",
            "name": "CREATE, ALTER, DROP"
        },
        {
            "id": "sql-constraints",
            "name": "Constraints"
        },
        {
            "id": "sql-indexes",
            "name": "Indexes"
        },
        {
            "id": "sql-views",
            "name": "Views"
        },
        {
            "id": "sql-transactions",
            "name": "Transactions & Locking (Basics)"
        },
        {
            "id": "sql-window",
            "name": "Window/Analytic Functions"
        },
        {
            "id": "sql-performance",
            "name": "Performance Basics"
        }
    ],
    "questions": [
        {
            "id": "sql-intro-q1",
            "technology": "sql",
            "topicId": "sql-intro",
            "topicName": "Introduction to SQL & Relational Databases",
            "difficulty": "easy",
            "question": "Explain in simple words what \"Introduction to SQL & Relational Databases\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-intro-q2",
            "technology": "sql",
            "topicId": "sql-intro",
            "topicName": "Introduction to SQL & Relational Databases",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"Introduction to SQL & Relational Databases\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-intro-q3",
            "technology": "sql",
            "topicId": "sql-intro",
            "topicName": "Introduction to SQL & Relational Databases",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"Introduction to SQL & Relational Databases\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"Introduction to SQL & Relational Databases\" and show a corrected version of such a query."
        },
        {
            "id": "sql-intro-q4",
            "technology": "sql",
            "topicId": "sql-intro",
            "topicName": "Introduction to SQL & Relational Databases",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"Introduction to SQL & Relational Databases\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-intro-q5",
            "technology": "sql",
            "topicId": "sql-intro",
            "topicName": "Introduction to SQL & Relational Databases",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"Introduction to SQL & Relational Databases\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-data-types-q1",
            "technology": "sql",
            "topicId": "sql-data-types",
            "topicName": "SQL Data Types",
            "difficulty": "easy",
            "question": "Explain in simple words what \"SQL Data Types\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-data-types-q2",
            "technology": "sql",
            "topicId": "sql-data-types",
            "topicName": "SQL Data Types",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"SQL Data Types\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-data-types-q3",
            "technology": "sql",
            "topicId": "sql-data-types",
            "topicName": "SQL Data Types",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"SQL Data Types\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"SQL Data Types\" and show a corrected version of such a query."
        },
        {
            "id": "sql-data-types-q4",
            "technology": "sql",
            "topicId": "sql-data-types",
            "topicName": "SQL Data Types",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"SQL Data Types\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-data-types-q5",
            "technology": "sql",
            "topicId": "sql-data-types",
            "topicName": "SQL Data Types",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"SQL Data Types\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-select-basics-q1",
            "technology": "sql",
            "topicId": "sql-select-basics",
            "topicName": "Basic SELECT & FROM",
            "difficulty": "easy",
            "question": "Explain in simple words what \"Basic SELECT & FROM\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-select-basics-q2",
            "technology": "sql",
            "topicId": "sql-select-basics",
            "topicName": "Basic SELECT & FROM",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"Basic SELECT & FROM\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-select-basics-q3",
            "technology": "sql",
            "topicId": "sql-select-basics",
            "topicName": "Basic SELECT & FROM",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"Basic SELECT & FROM\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"Basic SELECT & FROM\" and show a corrected version of such a query."
        },
        {
            "id": "sql-select-basics-q4",
            "technology": "sql",
            "topicId": "sql-select-basics",
            "topicName": "Basic SELECT & FROM",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"Basic SELECT & FROM\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-select-basics-q5",
            "technology": "sql",
            "topicId": "sql-select-basics",
            "topicName": "Basic SELECT & FROM",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"Basic SELECT & FROM\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-where-q1",
            "technology": "sql",
            "topicId": "sql-where",
            "topicName": "WHERE & Filtering",
            "difficulty": "easy",
            "question": "Explain in simple words what \"WHERE & Filtering\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-where-q2",
            "technology": "sql",
            "topicId": "sql-where",
            "topicName": "WHERE & Filtering",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"WHERE & Filtering\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-where-q3",
            "technology": "sql",
            "topicId": "sql-where",
            "topicName": "WHERE & Filtering",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"WHERE & Filtering\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"WHERE & Filtering\" and show a corrected version of such a query."
        },
        {
            "id": "sql-where-q4",
            "technology": "sql",
            "topicId": "sql-where",
            "topicName": "WHERE & Filtering",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"WHERE & Filtering\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-where-q5",
            "technology": "sql",
            "topicId": "sql-where",
            "topicName": "WHERE & Filtering",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"WHERE & Filtering\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-order-by-q1",
            "technology": "sql",
            "topicId": "sql-order-by",
            "topicName": "ORDER BY & Sorting",
            "difficulty": "easy",
            "question": "Explain in simple words what \"ORDER BY & Sorting\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-order-by-q2",
            "technology": "sql",
            "topicId": "sql-order-by",
            "topicName": "ORDER BY & Sorting",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"ORDER BY & Sorting\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-order-by-q3",
            "technology": "sql",
            "topicId": "sql-order-by",
            "topicName": "ORDER BY & Sorting",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"ORDER BY & Sorting\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"ORDER BY & Sorting\" and show a corrected version of such a query."
        },
        {
            "id": "sql-order-by-q4",
            "technology": "sql",
            "topicId": "sql-order-by",
            "topicName": "ORDER BY & Sorting",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"ORDER BY & Sorting\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-order-by-q5",
            "technology": "sql",
            "topicId": "sql-order-by",
            "topicName": "ORDER BY & Sorting",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"ORDER BY & Sorting\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-distinct-q1",
            "technology": "sql",
            "topicId": "sql-distinct",
            "topicName": "DISTINCT & Removing Duplicates",
            "difficulty": "easy",
            "question": "Explain in simple words what \"DISTINCT & Removing Duplicates\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-distinct-q2",
            "technology": "sql",
            "topicId": "sql-distinct",
            "topicName": "DISTINCT & Removing Duplicates",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"DISTINCT & Removing Duplicates\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-distinct-q3",
            "technology": "sql",
            "topicId": "sql-distinct",
            "topicName": "DISTINCT & Removing Duplicates",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"DISTINCT & Removing Duplicates\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"DISTINCT & Removing Duplicates\" and show a corrected version of such a query."
        },
        {
            "id": "sql-distinct-q4",
            "technology": "sql",
            "topicId": "sql-distinct",
            "topicName": "DISTINCT & Removing Duplicates",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"DISTINCT & Removing Duplicates\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-distinct-q5",
            "technology": "sql",
            "topicId": "sql-distinct",
            "topicName": "DISTINCT & Removing Duplicates",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"DISTINCT & Removing Duplicates\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-limit-q1",
            "technology": "sql",
            "topicId": "sql-limit",
            "topicName": "Row Limiting & Pagination",
            "difficulty": "easy",
            "question": "Explain in simple words what \"Row Limiting & Pagination\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-limit-q2",
            "technology": "sql",
            "topicId": "sql-limit",
            "topicName": "Row Limiting & Pagination",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"Row Limiting & Pagination\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-limit-q3",
            "technology": "sql",
            "topicId": "sql-limit",
            "topicName": "Row Limiting & Pagination",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"Row Limiting & Pagination\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"Row Limiting & Pagination\" and show a corrected version of such a query."
        },
        {
            "id": "sql-limit-q4",
            "technology": "sql",
            "topicId": "sql-limit",
            "topicName": "Row Limiting & Pagination",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"Row Limiting & Pagination\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-limit-q5",
            "technology": "sql",
            "topicId": "sql-limit",
            "topicName": "Row Limiting & Pagination",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"Row Limiting & Pagination\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-aggregate-functions-q1",
            "technology": "sql",
            "topicId": "sql-aggregate-functions",
            "topicName": "Aggregate Functions",
            "difficulty": "easy",
            "question": "Explain in simple words what \"Aggregate Functions\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-aggregate-functions-q2",
            "technology": "sql",
            "topicId": "sql-aggregate-functions",
            "topicName": "Aggregate Functions",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"Aggregate Functions\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-aggregate-functions-q3",
            "technology": "sql",
            "topicId": "sql-aggregate-functions",
            "topicName": "Aggregate Functions",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"Aggregate Functions\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"Aggregate Functions\" and show a corrected version of such a query."
        },
        {
            "id": "sql-aggregate-functions-q4",
            "technology": "sql",
            "topicId": "sql-aggregate-functions",
            "topicName": "Aggregate Functions",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"Aggregate Functions\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-aggregate-functions-q5",
            "technology": "sql",
            "topicId": "sql-aggregate-functions",
            "topicName": "Aggregate Functions",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"Aggregate Functions\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-group-by-q1",
            "technology": "sql",
            "topicId": "sql-group-by",
            "topicName": "GROUP BY",
            "difficulty": "easy",
            "question": "Explain in simple words what \"GROUP BY\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-group-by-q2",
            "technology": "sql",
            "topicId": "sql-group-by",
            "topicName": "GROUP BY",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"GROUP BY\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-group-by-q3",
            "technology": "sql",
            "topicId": "sql-group-by",
            "topicName": "GROUP BY",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"GROUP BY\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"GROUP BY\" and show a corrected version of such a query."
        },
        {
            "id": "sql-group-by-q4",
            "technology": "sql",
            "topicId": "sql-group-by",
            "topicName": "GROUP BY",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"GROUP BY\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-group-by-q5",
            "technology": "sql",
            "topicId": "sql-group-by",
            "topicName": "GROUP BY",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"GROUP BY\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-having-q1",
            "technology": "sql",
            "topicId": "sql-having",
            "topicName": "HAVING Clause",
            "difficulty": "easy",
            "question": "Explain in simple words what \"HAVING Clause\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-having-q2",
            "technology": "sql",
            "topicId": "sql-having",
            "topicName": "HAVING Clause",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"HAVING Clause\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-having-q3",
            "technology": "sql",
            "topicId": "sql-having",
            "topicName": "HAVING Clause",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"HAVING Clause\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"HAVING Clause\" and show a corrected version of such a query."
        },
        {
            "id": "sql-having-q4",
            "technology": "sql",
            "topicId": "sql-having",
            "topicName": "HAVING Clause",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"HAVING Clause\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-having-q5",
            "technology": "sql",
            "topicId": "sql-having",
            "topicName": "HAVING Clause",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"HAVING Clause\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-joins-q1",
            "technology": "sql",
            "topicId": "sql-joins",
            "topicName": "Joins (INNER/LEFT/RIGHT/FULL)",
            "difficulty": "easy",
            "question": "Explain in simple words what \"Joins (INNER/LEFT/RIGHT/FULL)\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-joins-q2",
            "technology": "sql",
            "topicId": "sql-joins",
            "topicName": "Joins (INNER/LEFT/RIGHT/FULL)",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"Joins (INNER/LEFT/RIGHT/FULL)\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-joins-q3",
            "technology": "sql",
            "topicId": "sql-joins",
            "topicName": "Joins (INNER/LEFT/RIGHT/FULL)",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"Joins (INNER/LEFT/RIGHT/FULL)\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"Joins (INNER/LEFT/RIGHT/FULL)\" and show a corrected version of such a query."
        },
        {
            "id": "sql-joins-q4",
            "technology": "sql",
            "topicId": "sql-joins",
            "topicName": "Joins (INNER/LEFT/RIGHT/FULL)",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"Joins (INNER/LEFT/RIGHT/FULL)\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-joins-q5",
            "technology": "sql",
            "topicId": "sql-joins",
            "topicName": "Joins (INNER/LEFT/RIGHT/FULL)",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"Joins (INNER/LEFT/RIGHT/FULL)\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-self-join-q1",
            "technology": "sql",
            "topicId": "sql-self-join",
            "topicName": "Self Joins",
            "difficulty": "easy",
            "question": "Explain in simple words what \"Self Joins\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-self-join-q2",
            "technology": "sql",
            "topicId": "sql-self-join",
            "topicName": "Self Joins",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"Self Joins\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-self-join-q3",
            "technology": "sql",
            "topicId": "sql-self-join",
            "topicName": "Self Joins",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"Self Joins\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"Self Joins\" and show a corrected version of such a query."
        },
        {
            "id": "sql-self-join-q4",
            "technology": "sql",
            "topicId": "sql-self-join",
            "topicName": "Self Joins",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"Self Joins\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-self-join-q5",
            "technology": "sql",
            "topicId": "sql-self-join",
            "topicName": "Self Joins",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"Self Joins\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-subqueries-q1",
            "technology": "sql",
            "topicId": "sql-subqueries",
            "topicName": "Subqueries",
            "difficulty": "easy",
            "question": "Explain in simple words what \"Subqueries\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-subqueries-q2",
            "technology": "sql",
            "topicId": "sql-subqueries",
            "topicName": "Subqueries",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"Subqueries\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-subqueries-q3",
            "technology": "sql",
            "topicId": "sql-subqueries",
            "topicName": "Subqueries",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"Subqueries\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"Subqueries\" and show a corrected version of such a query."
        },
        {
            "id": "sql-subqueries-q4",
            "technology": "sql",
            "topicId": "sql-subqueries",
            "topicName": "Subqueries",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"Subqueries\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-subqueries-q5",
            "technology": "sql",
            "topicId": "sql-subqueries",
            "topicName": "Subqueries",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"Subqueries\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-set-ops-q1",
            "technology": "sql",
            "topicId": "sql-set-ops",
            "topicName": "Set Operations (UNION/INTERSECT/MINUS)",
            "difficulty": "easy",
            "question": "Explain in simple words what \"Set Operations (UNION/INTERSECT/MINUS)\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-set-ops-q2",
            "technology": "sql",
            "topicId": "sql-set-ops",
            "topicName": "Set Operations (UNION/INTERSECT/MINUS)",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"Set Operations (UNION/INTERSECT/MINUS)\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-set-ops-q3",
            "technology": "sql",
            "topicId": "sql-set-ops",
            "topicName": "Set Operations (UNION/INTERSECT/MINUS)",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"Set Operations (UNION/INTERSECT/MINUS)\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"Set Operations (UNION/INTERSECT/MINUS)\" and show a corrected version of such a query."
        },
        {
            "id": "sql-set-ops-q4",
            "technology": "sql",
            "topicId": "sql-set-ops",
            "topicName": "Set Operations (UNION/INTERSECT/MINUS)",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"Set Operations (UNION/INTERSECT/MINUS)\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-set-ops-q5",
            "technology": "sql",
            "topicId": "sql-set-ops",
            "topicName": "Set Operations (UNION/INTERSECT/MINUS)",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"Set Operations (UNION/INTERSECT/MINUS)\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-functions-q1",
            "technology": "sql",
            "topicId": "sql-functions",
            "topicName": "String/Date/Numeric Functions",
            "difficulty": "easy",
            "question": "Explain in simple words what \"String/Date/Numeric Functions\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-functions-q2",
            "technology": "sql",
            "topicId": "sql-functions",
            "topicName": "String/Date/Numeric Functions",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"String/Date/Numeric Functions\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-functions-q3",
            "technology": "sql",
            "topicId": "sql-functions",
            "topicName": "String/Date/Numeric Functions",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"String/Date/Numeric Functions\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"String/Date/Numeric Functions\" and show a corrected version of such a query."
        },
        {
            "id": "sql-functions-q4",
            "technology": "sql",
            "topicId": "sql-functions",
            "topicName": "String/Date/Numeric Functions",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"String/Date/Numeric Functions\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-functions-q5",
            "technology": "sql",
            "topicId": "sql-functions",
            "topicName": "String/Date/Numeric Functions",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"String/Date/Numeric Functions\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-case-q1",
            "technology": "sql",
            "topicId": "sql-case",
            "topicName": "CASE Expressions",
            "difficulty": "easy",
            "question": "Explain in simple words what \"CASE Expressions\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-case-q2",
            "technology": "sql",
            "topicId": "sql-case",
            "topicName": "CASE Expressions",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"CASE Expressions\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-case-q3",
            "technology": "sql",
            "topicId": "sql-case",
            "topicName": "CASE Expressions",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"CASE Expressions\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"CASE Expressions\" and show a corrected version of such a query."
        },
        {
            "id": "sql-case-q4",
            "technology": "sql",
            "topicId": "sql-case",
            "topicName": "CASE Expressions",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"CASE Expressions\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-case-q5",
            "technology": "sql",
            "topicId": "sql-case",
            "topicName": "CASE Expressions",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"CASE Expressions\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-dml-q1",
            "technology": "sql",
            "topicId": "sql-dml",
            "topicName": "INSERT, UPDATE, DELETE",
            "difficulty": "easy",
            "question": "Explain in simple words what \"INSERT, UPDATE, DELETE\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-dml-q2",
            "technology": "sql",
            "topicId": "sql-dml",
            "topicName": "INSERT, UPDATE, DELETE",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"INSERT, UPDATE, DELETE\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-dml-q3",
            "technology": "sql",
            "topicId": "sql-dml",
            "topicName": "INSERT, UPDATE, DELETE",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"INSERT, UPDATE, DELETE\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"INSERT, UPDATE, DELETE\" and show a corrected version of such a query."
        },
        {
            "id": "sql-dml-q4",
            "technology": "sql",
            "topicId": "sql-dml",
            "topicName": "INSERT, UPDATE, DELETE",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"INSERT, UPDATE, DELETE\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-dml-q5",
            "technology": "sql",
            "topicId": "sql-dml",
            "topicName": "INSERT, UPDATE, DELETE",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"INSERT, UPDATE, DELETE\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-ddl-q1",
            "technology": "sql",
            "topicId": "sql-ddl",
            "topicName": "CREATE, ALTER, DROP",
            "difficulty": "easy",
            "question": "Explain in simple words what \"CREATE, ALTER, DROP\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-ddl-q2",
            "technology": "sql",
            "topicId": "sql-ddl",
            "topicName": "CREATE, ALTER, DROP",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"CREATE, ALTER, DROP\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-ddl-q3",
            "technology": "sql",
            "topicId": "sql-ddl",
            "topicName": "CREATE, ALTER, DROP",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"CREATE, ALTER, DROP\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"CREATE, ALTER, DROP\" and show a corrected version of such a query."
        },
        {
            "id": "sql-ddl-q4",
            "technology": "sql",
            "topicId": "sql-ddl",
            "topicName": "CREATE, ALTER, DROP",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"CREATE, ALTER, DROP\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-ddl-q5",
            "technology": "sql",
            "topicId": "sql-ddl",
            "topicName": "CREATE, ALTER, DROP",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"CREATE, ALTER, DROP\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-constraints-q1",
            "technology": "sql",
            "topicId": "sql-constraints",
            "topicName": "Constraints",
            "difficulty": "easy",
            "question": "Explain in simple words what \"Constraints\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-constraints-q2",
            "technology": "sql",
            "topicId": "sql-constraints",
            "topicName": "Constraints",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"Constraints\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-constraints-q3",
            "technology": "sql",
            "topicId": "sql-constraints",
            "topicName": "Constraints",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"Constraints\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"Constraints\" and show a corrected version of such a query."
        },
        {
            "id": "sql-constraints-q4",
            "technology": "sql",
            "topicId": "sql-constraints",
            "topicName": "Constraints",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"Constraints\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-constraints-q5",
            "technology": "sql",
            "topicId": "sql-constraints",
            "topicName": "Constraints",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"Constraints\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-indexes-q1",
            "technology": "sql",
            "topicId": "sql-indexes",
            "topicName": "Indexes",
            "difficulty": "easy",
            "question": "Explain in simple words what \"Indexes\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-indexes-q2",
            "technology": "sql",
            "topicId": "sql-indexes",
            "topicName": "Indexes",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"Indexes\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-indexes-q3",
            "technology": "sql",
            "topicId": "sql-indexes",
            "topicName": "Indexes",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"Indexes\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"Indexes\" and show a corrected version of such a query."
        },
        {
            "id": "sql-indexes-q4",
            "technology": "sql",
            "topicId": "sql-indexes",
            "topicName": "Indexes",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"Indexes\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-indexes-q5",
            "technology": "sql",
            "topicId": "sql-indexes",
            "topicName": "Indexes",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"Indexes\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-views-q1",
            "technology": "sql",
            "topicId": "sql-views",
            "topicName": "Views",
            "difficulty": "easy",
            "question": "Explain in simple words what \"Views\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-views-q2",
            "technology": "sql",
            "topicId": "sql-views",
            "topicName": "Views",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"Views\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-views-q3",
            "technology": "sql",
            "topicId": "sql-views",
            "topicName": "Views",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"Views\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"Views\" and show a corrected version of such a query."
        },
        {
            "id": "sql-views-q4",
            "technology": "sql",
            "topicId": "sql-views",
            "topicName": "Views",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"Views\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-views-q5",
            "technology": "sql",
            "topicId": "sql-views",
            "topicName": "Views",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"Views\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-transactions-q1",
            "technology": "sql",
            "topicId": "sql-transactions",
            "topicName": "Transactions & Locking (Basics)",
            "difficulty": "easy",
            "question": "Explain in simple words what \"Transactions & Locking (Basics)\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-transactions-q2",
            "technology": "sql",
            "topicId": "sql-transactions",
            "topicName": "Transactions & Locking (Basics)",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"Transactions & Locking (Basics)\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-transactions-q3",
            "technology": "sql",
            "topicId": "sql-transactions",
            "topicName": "Transactions & Locking (Basics)",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"Transactions & Locking (Basics)\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"Transactions & Locking (Basics)\" and show a corrected version of such a query."
        },
        {
            "id": "sql-transactions-q4",
            "technology": "sql",
            "topicId": "sql-transactions",
            "topicName": "Transactions & Locking (Basics)",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"Transactions & Locking (Basics)\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-transactions-q5",
            "technology": "sql",
            "topicId": "sql-transactions",
            "topicName": "Transactions & Locking (Basics)",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"Transactions & Locking (Basics)\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-window-q1",
            "technology": "sql",
            "topicId": "sql-window",
            "topicName": "Window/Analytic Functions",
            "difficulty": "easy",
            "question": "Explain in simple words what \"Window/Analytic Functions\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-window-q2",
            "technology": "sql",
            "topicId": "sql-window",
            "topicName": "Window/Analytic Functions",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"Window/Analytic Functions\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-window-q3",
            "technology": "sql",
            "topicId": "sql-window",
            "topicName": "Window/Analytic Functions",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"Window/Analytic Functions\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"Window/Analytic Functions\" and show a corrected version of such a query."
        },
        {
            "id": "sql-window-q4",
            "technology": "sql",
            "topicId": "sql-window",
            "topicName": "Window/Analytic Functions",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"Window/Analytic Functions\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-window-q5",
            "technology": "sql",
            "topicId": "sql-window",
            "topicName": "Window/Analytic Functions",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"Window/Analytic Functions\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        },
        {
            "id": "sql-performance-q1",
            "technology": "sql",
            "topicId": "sql-performance",
            "topicName": "Performance Basics",
            "difficulty": "easy",
            "question": "Explain in simple words what \"Performance Basics\" means and write one very basic example\nSQL query that uses this concept."
        },
        {
            "id": "sql-performance-q2",
            "technology": "sql",
            "topicId": "sql-performance",
            "topicName": "Performance Basics",
            "difficulty": "medium",
            "question": "You are working with a table EMPLOYEES(emp_id, emp_name, salary, dept_id).\nWrite an SQL query that correctly uses \"Performance Basics\" in a realistic scenario,\nand then describe what the query output represents for the business."
        },
        {
            "id": "sql-performance-q3",
            "technology": "sql",
            "topicId": "sql-performance",
            "topicName": "Performance Basics",
            "difficulty": "medium",
            "question": "A junior developer wrote a query that tries to use \"Performance Basics\" but it is buggy\nor logically wrong. Describe at least two common mistakes people make when using\n\"Performance Basics\" and show a corrected version of such a query."
        },
        {
            "id": "sql-performance-q4",
            "technology": "sql",
            "topicId": "sql-performance",
            "topicName": "Performance Basics",
            "difficulty": "hard",
            "question": "You have two tables: EMPLOYEES(emp_id, emp_name, salary, dept_id, hire_date)\nand DEPARTMENTS(dept_id, dept_name, location).\nA manager asks for a non-trivial report that MUST use \"Performance Basics\" in the solution.\nDefine a realistic business requirement that fits this topic and then write a full,\noptimized SQL query that satisfies that requirement. Also explain the query step by step."
        },
        {
            "id": "sql-performance-q5",
            "technology": "sql",
            "topicId": "sql-performance",
            "topicName": "Performance Basics",
            "difficulty": "hard",
            "question": "Consider a large production database where queries using \"Performance Basics\" are running slowly.\n1) Give an example of such a heavy query.\n2) Suggest at least three different ways to optimize or rewrite it (indexing, query rewrite,\n   use of different clauses, etc.).\n3) Explain the pros and cons of each optimization in detail."
        }
    ]
};
