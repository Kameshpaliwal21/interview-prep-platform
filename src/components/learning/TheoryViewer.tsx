import React from 'react';
import ReactMarkdown from 'react-markdown';

interface TheoryViewerProps {
    content: string;
}

const TheoryViewer: React.FC<TheoryViewerProps> = ({ content }) => {
    return (
        <div className="markdown-content">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default TheoryViewer;
