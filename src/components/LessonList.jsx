import React from 'react';

export default function LessonList({ lessons, onSelect }) {
  return (
    <div className="space-y-4">
      {lessons.map((lesson) => (
        <div key={lesson.id} className="bg-white shadow p-4 rounded flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">{lesson.title}</h2>
            <p>{lesson.description}</p>
          </div>
          <button
            disabled={lesson.status === 'locked'}
            className={`px-4 py-2 rounded text-white ${lesson.status === 'locked' ? 'bg-gray-400' : 'bg-blue-500'}`}
            onClick={() => onSelect(lesson)}
          >
            Play
          </button>
        </div>
      ))}
    </div>
  );
}
