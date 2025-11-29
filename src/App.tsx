import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import AppLayout from './components/layout/AppLayout';
import WelcomeScreen from './components/onboarding/WelcomeScreen';
import Home from './pages/Home';
import ChapterMode from './pages/ChapterMode';
import ChapterDetail from './pages/ChapterDetail';
import PracticeMode from './pages/PracticeMode';
import PracticeDetail from './pages/PracticeDetail';
import InterviewMode from './pages/InterviewMode';

const AppRoutes: React.FC = () => {
  const { user, isLoading } = useApp();

  if (isLoading) {
    return <div className="flex-center" style={{ height: '100vh' }}>Loading...</div>;
  }

  if (!user) {
    return <WelcomeScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="learn" element={<ChapterMode />} />
        <Route path="learn/:topicId" element={<ChapterDetail />} />
        <Route path="practice" element={<PracticeMode />} />
        <Route path="practice/:topicId" element={<PracticeDetail />} />
        <Route path="interview" element={<InterviewMode />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
