import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import { StreamLanguage } from '@codemirror/language';
import { shell } from '@codemirror/legacy-modes/mode/shell';
import { githubDark } from '@uiw/codemirror-theme-github';

interface CodeEditorProps {
    value: string;
    onChange: (value: string) => void;
    language: 'sql' | 'plsql' | 'shell';
    readOnly?: boolean;
    height?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, language, readOnly = false, height = "300px" }) => {

    const getExtensions = () => {
        switch (language) {
            case 'sql':
            case 'plsql':
                return [sql()];
            case 'shell':
                return [StreamLanguage.define(shell)];
            default:
                return [];
        }
    };

    return (
        <div style={{ fontSize: '14px', border: '1px solid var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
            <CodeMirror
                value={value}
                height={height}
                theme={githubDark}
                extensions={getExtensions()}
                onChange={onChange}
                editable={!readOnly}
                basicSetup={{
                    lineNumbers: true,
                    highlightActiveLineGutter: true,
                    highlightSpecialChars: true,
                    history: true,
                    foldGutter: true,
                    drawSelection: true,
                    dropCursor: true,
                    allowMultipleSelections: true,
                    indentOnInput: true,
                    syntaxHighlighting: true,
                    bracketMatching: true,
                    closeBrackets: true,
                    autocompletion: true,
                    rectangularSelection: true,
                    crosshairCursor: true,
                    highlightActiveLine: true,
                    highlightSelectionMatches: true,
                    closeBracketsKeymap: true,
                    defaultKeymap: true,
                    searchKeymap: true,
                    historyKeymap: true,
                    foldKeymap: true,
                    completionKeymap: true,
                    lintKeymap: true,
                }}
            />
        </div>
    );
};

export default CodeEditor;
