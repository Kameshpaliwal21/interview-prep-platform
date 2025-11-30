import type { JudgeResult } from '../types';
import { getTestCases } from '../data/testCases';

export const JudgeService = {
    runCode: async (_questionId: string, techId: string, code: string): Promise<JudgeResult> => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (!code.trim()) {
            return {
                status: 'syntax_error',
                error: {
                    line: 1,
                    column: 1,
                    message: 'Code cannot be empty'
                }
            };
        }

        // Mock Syntax Error Check (Simple heuristic)
        if (code.includes('ERROR')) {
            return {
                status: 'syntax_error',
                error: {
                    line: 1,
                    column: 1,
                    message: 'Simulated syntax error found'
                }
            };
        }

        // Mock Execution Output
        return {
            status: 'success',
            output: `Execution Result for ${techId}:\n> Command executed successfully.\n> 1 row affected.`
        };
    },

    submitCode: async (questionId: string, techId: string, code: string): Promise<JudgeResult> => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        const testCases = getTestCases(questionId, techId);
        const results = testCases.map(tc => {
            // Mock logic: If code contains "fail", fail the test case. Otherwise pass.
            // In a real app, this would run against a DB or Shell.
            const passed = !code.includes('fail');
            return {
                testCaseId: tc.id,
                passed: passed,
                actualOutput: passed ? tc.expectedOutput : 'Unexpected output',
                message: passed ? 'Test case passed' : 'Output did not match expected result'
            };
        });

        const overallPassed = results.every(r => r.passed);

        return {
            status: 'success',
            testResults: results,
            overallPassed
        };
    }
};
