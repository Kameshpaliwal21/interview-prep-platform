import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
    durationSeconds: number;
    onTimeUp: () => void;
    isActive: boolean;
}

const Timer: React.FC<TimerProps> = ({ durationSeconds, onTimeUp, isActive }) => {
    const [timeLeft, setTimeLeft] = useState(durationSeconds);

    useEffect(() => {
        setTimeLeft(durationSeconds);
    }, [durationSeconds]);

    useEffect(() => {
        if (!isActive || timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    onTimeUp();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isActive, timeLeft, onTimeUp]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const getColor = () => {
        if (timeLeft < 60) return 'var(--error)'; // Red if < 1 min
        if (timeLeft < 300) return 'var(--warning)'; // Yellow if < 5 min
        return 'var(--text-primary)';
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: getColor(), fontWeight: 600 }}>
            <Clock size={20} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem' }}>
                {formatTime(timeLeft)}
            </span>
        </div>
    );
};

export default Timer;
