let currentGame = null;

function showLessonList() {
  const app = document.getElementById('app');
  app.innerHTML = '';
  const container = document.createElement('div');
  container.className = 'space-y-4';

  lessons.forEach((lesson) => {
    const item = document.createElement('div');
    item.className = 'bg-white shadow p-4 rounded flex items-center justify-between';

    const info = document.createElement('div');
    const title = document.createElement('h2');
    title.className = 'text-xl font-bold';
    title.textContent = lesson.title;
    const desc = document.createElement('p');
    desc.textContent = lesson.description;
    info.appendChild(title);
    info.appendChild(desc);

    const btn = document.createElement('button');
    btn.textContent = 'Play';
    btn.disabled = lesson.status === 'locked';
    btn.className = `px-4 py-2 rounded text-white ${lesson.status === 'locked' ? 'bg-gray-400' : 'bg-blue-500'}`;
    btn.addEventListener('click', () => startLesson(lesson));

    item.appendChild(info);
    item.appendChild(btn);
    container.appendChild(item);
  });

  app.appendChild(container);
}

function startLesson(lesson) {
  const app = document.getElementById('app');
  app.innerHTML = '';
  const backBtn = document.createElement('button');
  backBtn.textContent = 'Back';
  backBtn.className = 'mb-2 text-blue-500';
  backBtn.addEventListener('click', () => {
    if (currentGame) {
      currentGame.destroy();
      currentGame = null;
    }
    showLessonList();
  });

  const gameContainer = document.createElement('div');
  app.appendChild(backBtn);
  app.appendChild(gameContainer);

  currentGame = new CountObjectsGame(gameContainer, lesson.gameContent);
}

window.addEventListener('DOMContentLoaded', showLessonList);
