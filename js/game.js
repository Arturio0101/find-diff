document.addEventListener('DOMContentLoaded', () => {
  const differenceAreaContainer = document.getElementById('differenceAreaContainer');
  const differencesFound = document.getElementById('differencesFound');
  const restartButton = document.getElementById('restartButton');
  const menuButton = document.getElementById('menuButton');
  const backgroundMusic = document.getElementById('backgroundMusic');

  const totalDifferences = 5;
  let foundDifferences = 0;

  // Координаты областей различий
  const differenceAreas = [
    { top: 20, left: 30, width: 50, height: 50 },
    { top: 70, left: 150, width: 40, height: 40 },
    { top: 150, left: 100, width: 60, height: 60 },
    { top: 220, left: 70, width: 50, height: 50 },
    { top: 300, left: 200, width: 40, height: 40 },
  ];

  // Загрузим звуковые файлы
  const wrongSound = new Audio('sounds/wrong1.mp3');
  const successSound = new Audio('sounds/success1.wav');

  // Фоновые треки
  const musicTracks = [
    'sounds/background-music2.wav',
    'sounds/background-music3.wav',
    'sounds/background-music4.wav',
    'sounds/background-music5.wav',
    'sounds/background-music6.wav',
    'sounds/background-music7.wav',
    'sounds/background-music8.wav',
  ];

  // Выбираем случайный трек
  const playRandomMusic = () => {
    const randomTrack = musicTracks[Math.floor(Math.random() * musicTracks.length)];
    backgroundMusic.src = randomTrack;
    backgroundMusic.play().catch((error) => {
      console.log('Ошибка воспроизведения музыки:', error);
    });
  };

  // Таймер для воспроизведения музыки
  const startMusicWithDelay = () => {
    setTimeout(() => {
      playRandomMusic();
    }, 1000); // Задержка 1 секунда
  };

  // Запускаем музыку после первого взаимодействия
  let musicStarted = false;
  document.body.addEventListener('click', () => {
    if (!musicStarted) {
      musicStarted = true;
      startMusicWithDelay();
    }
  });

  // Создаем области различий
  differenceAreas.forEach((area) => {
    const div = document.createElement('div');
    div.classList.add('difference-area');
    div.style.top = `${area.top}px`;
    div.style.left = `${area.left}px`;
    div.style.width = `${area.width}px`;
    div.style.height = `${area.height}px`;
    differenceAreaContainer.appendChild(div);

    // Добавляем обработчик клика для правильных областей
    div.addEventListener('click', (event) => {
      event.stopPropagation();
      if (div.classList.contains('found')) return;

      div.classList.add('found');
      foundDifferences += 1;
      differencesFound.textContent = `${foundDifferences} из ${totalDifferences}`;
      successSound.play();

      if (foundDifferences === totalDifferences) {
        alert('Поздравляем! Все различия найдены!');
      }
    });
  });

  // Обработчик клика на неправильные области
  differenceAreaContainer.addEventListener('click', () => {
    wrongSound.play();
  });

  // Сброс игры
  restartButton.addEventListener('click', () => {
    foundDifferences = 0;
    differencesFound.textContent = `0 из ${totalDifferences}`;
    document.querySelectorAll('.difference-area').forEach((area) => {
      area.classList.remove('found');
    });
  });

  // Возврат в главное меню
  menuButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
});