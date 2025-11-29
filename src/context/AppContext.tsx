import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { User, TechId, ExperienceLevel } from '../types';

interface AppState {
    user: User | null;
    isLoading: boolean;
    login: (name: string, designation: string, yearsOfExperience: string, level: ExperienceLevel, skills: TechId[]) => void;
    logout: () => void;
    updateProgress: (questionId: string) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

const STORAGE_KEY = 'interview_prep_user';

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem(STORAGE_KEY);
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                // Validate that the user object has the new required fields
                if (parsedUser && Array.isArray(parsedUser.primarySkills)) {
                    setUser(parsedUser);
                } else {
                    // Legacy data found, clear it to force re-onboarding
                    console.warn('Legacy user data detected. Clearing storage to force re-onboarding.');
                    localStorage.removeItem(STORAGE_KEY);
                    setUser(null);
                }
            } catch (error) {
                console.error('Failed to parse user data:', error);
                localStorage.removeItem(STORAGE_KEY);
                setUser(null);
            }
        }
        setIsLoading(false);
    }, []);

    const login = (name: string, designation: string, yearsOfExperience: string, level: ExperienceLevel, skills: TechId[]) => {
        const newUser: User = {
            id: crypto.randomUUID(),
            name,
            designation,
            yearsOfExperience,
            experienceLevel: level,
            primarySkills: skills,
            completedTopics: [],
            completedQuestions: [],
            score: 0,
        };
        setUser(newUser);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem(STORAGE_KEY);
    };

    const updateProgress = (questionId: string) => {
        if (!user) return;
        if (user.completedQuestions.includes(questionId)) return;

        const updatedUser = {
            ...user,
            completedQuestions: [...user.completedQuestions, questionId],
            score: user.score + 10, // Simple scoring
        };
        setUser(updatedUser);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser));
    };

    return (
        <AppContext.Provider value={{ user, isLoading, login, logout, updateProgress }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};
