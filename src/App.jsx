import React, { useState } from 'react';
import lessons from './lessons.json';
import LessonList from './components/LessonList';
import GameScreen from './components/GameScreen';

export default function App() {
  const [activeLesson, setActiveLesson] = useState(null);

  const handleSelect = (lesson) => {
    setActiveLesson(lesson);
  };

  const handleExit = () => {
    setActiveLesson(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {!activeLesson && (
        <LessonList lessons={lessons} onSelect={handleSelect} />
      )}
      {activeLesson && (
        <GameScreen lesson={activeLesson} onExit={handleExit} />
      )}
    </div>
  );
}
