document.addEventListener('DOMContentLoaded', () => {
  const splashScreen = document.getElementById('splashScreen');
  const mainMenu = document.getElementById('mainMenu');
  const characterSelection = document.getElementById('characterSelection');
  const backgroundMusic = document.getElementById('background-music');
  const progressBar = document.getElementById('progress');
  const startButton = document.getElementById('start-button');
  const startNewGameButton = document.getElementById('startNewGameButton');
  const backToMenuButton = document.getElementById('backToMenuButton');
  const continueGameButton = document.getElementById('continueGameButton');
  const gameScreen = document.getElementById('gameScreen');
  const backgroundVideo = document.getElementById('backgroundVideo');
  
  const popup = document.getElementById('popup');
  const pointsElem = document.getElementById('points');
  const levelElem = document.getElementById('level');
  const nextLevelButton = document.getElementById('nextLevel');
  
  
  const differenceAreaContainer = document.getElementById('differenceAreaContainer');
  const differencesFound = document.getElementById('differencesFound');
  const restartButton = document.getElementById('restartButton');
  const menuButton = document.getElementById('menuButton');
  
  
   const totalDifferences = 5;
  let foundDifferences = 0;
  let level = 1;
  points = 0;


  const levelData = {
    1: {
      leftImage: 'images/level1-a.jpg',
      rightImage: 'images/level1-b.jpg',
      differences: [
        { top: 56, left: 30, width: 32, height: 32 },
        { top: 57, left: 88, width: 36, height: 18 },
        { top: 95, left: 175, width: 35, height: 35 },
        { top: 108, left: 0, width: 34, height: 34 },
        { top: 252, left: 0, width: 45, height: 45 },
      ],
    },
    2: {
      leftImage: 'images/level2-a.jpg',
      rightImage: 'images/level2-b.jpg',
      differences: [
        { top: 30, left: 45, width: 30, height: 40 },
        { top: 5, left: 87, width: 30, height: 57 },
        { top: 142, left: 70, width: 20, height: 20 },
        { top: 152, left: 125, width: 20, height: 20 },
        { top: 230, left: 160, width: 60, height: 60 },
      ],
    },
	3: {
      leftImage: 'images/level3-a.jpg',
      rightImage: 'images/level3-b.jpg',
      differences: [
        { top: 85, left: 0, width: 32, height: 50 },
        { top: 110, left: 200, width: 80, height: 30 },
        { top: 244, left: 200, width: 50, height: 50 },
        { top: 240, left: 80, width: 30, height: 30 },
        { top: 220, left: 250, width: 50, height: 60 },
      ],
    },
	4: {
      leftImage: 'images/level4-a.jpg',
      rightImage: 'images/level4-b.jpg',
      differences: [
        { top: 170, left: 50, width: 30, height: 90 },
        { top: 120, left: 260, width: 40, height: 40 },
        { top: 175, left: 100, width: 30, height: 30 },
        { top: 140, left: 155, width: 50, height: 50 },
        { top: 330, left: 235, width: 60, height: 60 },
      ],
    },
	5: {
      leftImage: 'images/level5-a.jpg',
      rightImage: 'images/level5-b.jpg',
      differences: [
        { top: 5, left: 185, width: 50, height: 50 },
        { top: 200, left: 270, width: 30, height: 60 },
        { top: 190, left: 122, width: 50, height: 25 },
        { top: 240, left: 115, width: 70, height: 80 },
        { top: 155, left: 63, width: 35, height: 40 },
      ],
    },
	6: {
      leftImage: 'images/level6-a.jpg',
      rightImage: 'images/level6-b.jpg',
      differences: [
        { top: 40, left: 5, width: 45, height: 45 },
        { top: 10, left: 245, width: 50, height: 60 },
        { top: 120, left: 40, width: 60, height: 60 },
        { top: 230, left: 165, width: 30, height: 30 },
        { top: 294, left: 60, width: 45, height: 45 },
      ],
    },
	7: {
      leftImage: 'images/level7-a.jpg',
      rightImage: 'images/level7-b.jpg',
      differences: [
        { top: 36, left: 232, width: 45, height: 45 },
        { top: 55, left: 105, width: 90, height: 40 },
        { top: 290, left: 0, width: 60, height: 65 },
        { top: 170, left: 133, width: 40, height: 25 },
        { top: 250, left: 253, width: 42, height: 135 },
      ],
    },
	8: {
      leftImage: 'images/level8-a.jpg',
      rightImage: 'images/level8-b.jpg',
      differences: [
        { top: 18, left: 232, width: 50, height: 50 },
        { top: 50, left: 0, width: 45, height: 50 },
        { top: 185, left: 113, width: 30, height: 30 },
        { top: 130, left: 108, width: 25, height: 50 },
        { top: 346, left: 233, width: 45, height: 45 },
      ],
    },
	9: {
      leftImage: 'images/level9-a.jpg',
      rightImage: 'images/level9-b.jpg',
      differences: [
        { top: 18, left: 212, width: 50, height: 50 },
        { top: 115, left: 115, width: 45, height: 24 },
        { top: 206, left: 100, width: 40, height: 40 },
        { top: 190, left: 44, width: 40, height: 40 },
        { top: 116, left: 203, width: 45, height: 45 },
      ],
    },
	10: {
      leftImage: 'images/level10-a.jpg',
      rightImage: 'images/level10-b.jpg',
      differences: [
        { top: 5, left: 76, width: 35, height: 35 },
        { top: 90, left: 40, width: 50, height: 50 },
        { top: 5, left: 163, width: 50, height: 50 },
        { top: 270, left: 238, width: 50, height: 50 },
        { top: 256, left: 8, width: 30, height: 30 },
      ],
	},
	 11: {
      leftImage: 'images/level11-a.jpg',
      rightImage: 'images/level11-b.jpg',
      differences: [
        { top: 0, left: 72, width: 40, height: 30 },
        { top: 130, left: 20, width: 50, height: 50 },
        { top: 169, left: 183, width: 40, height: 40 },
        { top: 290, left: 138, width: 40, height: 40 },
        { top: 146, left: 120, width: 60, height: 65 },
      ],
    },
	 12: {
      leftImage: 'images/level12-a.jpg',
      rightImage: 'images/level12-b.jpg',
      differences: [	
        { top: 122, left: 212, width: 30, height: 30 },
        { top: 120, left: 177, width: 37, height: 37 },
        { top: 318, left: 200, width: 40, height: 70 },
        { top: 206, left: 58, width: 44, height: 40 },
        { top: 34, left: 0, width: 45, height: 70 },
      ],
    },
	 13: {
      leftImage: 'images/level13-a.jpg',
      rightImage: 'images/level13-b.jpg',
      differences: [	
        { top: 15, left: 22, width: 50, height: 50 },
        { top: 162, left: 74, width: 50, height: 50 },
        { top: 28, left: 156, width: 40, height: 40 },
        { top: 250, left: 158, width: 100, height: 30 },
        { top: 106, left: 250, width: 35, height: 35 },
      ],
    },
	14: {
      leftImage: 'images/level14-a.jpg',
      rightImage: 'images/level14-b.jpg',
      differences: [	
        { top: 15, left: 168, width: 50, height: 30 },
        { top: 188, left: 46, width: 50, height: 40 },
        { top: 88, left: 56, width: 40, height: 40 },
        { top: 270, left: 25, width: 50, height: 40 },
        { top: 166, left: 130, width: 30, height: 30 },
      ],
    },
	15: {
      leftImage: 'images/level15-a.jpg',
      rightImage: 'images/level15-b.jpg',
      differences: [	
        { top: 5, left: 52, width: 45, height: 45 },
        { top: 192, left: 150, width: 50, height: 50 },
        { top: 195, left: 16, width: 40, height: 40 },
        { top: 237, left: 82, width: 30, height: 30 },
        { top: 266, left: 160, width: 35, height: 35 },
      ],
    },
    // Дополнительные уровни можно добавить сюда.
  };
  
  
function getRandomColor() {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688'];
    return colors[Math.floor(Math.random() * colors.length)];
}  

function createConfetti() {
    for (let i = 0; i < 200; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = Math.random() * 1 + 2 + 's';

        confettiContainer.appendChild(confetti);
        
        confetti.addEventListener('animationend', () => {
            confettiContainer.removeChild(confetti);
        });
    }
}

  function loadLevel(level) {
    // Обновляем изображения
    document.querySelector('.game-images img[alt="Left Image"]').src =
      levelData[level].leftImage;
    document.querySelector('.game-images img[alt="Right Image"]').src =
      levelData[level].rightImage;

    // Обновляем счетчик уровня
    document.querySelector('.game-level').textContent = `Stufe: ${level}`;

    // Очищаем и перерисовываем области различий
    differenceAreaContainer.innerHTML = '';
    levelData[level].differences.forEach((area) => {
      const div = document.createElement('div');
      div.classList.add('difference-area');
      div.style.top = `${area.top}px`;
      div.style.left = `${area.left}px`;
      div.style.width = `${area.width}px`;
      div.style.height = `${area.height}px`;
      differenceAreaContainer.appendChild(div);

      div.addEventListener('click', (event) => {
        event.stopPropagation();
        if (div.classList.contains('found')) return;

        div.classList.add('found');
        foundDifferences += 1;
		successSound.play();
        differencesFound.textContent = `${foundDifferences} из ${totalDifferences}`;
        if (foundDifferences === totalDifferences) {
			createConfetti();
          setTimeout(() => showPopup(), 1200);
        }
      });
    });

    // Сбрасываем счетчик найденных различий
    foundDifferences = 0;
    differencesFound.textContent = `0 из ${totalDifferences}`;
	
  }
  
  function resetLevelState() {
  fireworksActive = false;
  explosionStrength = 1;
}

function animatePointsIncrement(start, end, step, duration) {
  let current = start;
  const increment = step || 20; // Шаг увеличения
  const intervalDuration = duration || 25 ; // Скорость анимации (мс)

  const interval = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end; // Чтобы не превышать конечное значение
      clearInterval(interval);
    }
    pointsElem.textContent = current; // Отображение текущего значения
  }, intervalDuration);
}

  function showPopup() {
  console.log(document.querySelector('.fireworks'));
  popup.style.display = 'flex';
  levelElem.textContent = level;

  const pointsToAdd = 1500; // Очки за уровень
  const currentPoints = points; // Текущее количество очков
  points += pointsToAdd; // Обновляем общие очки

  // Анимация начисления
  animatePointsIncrement(currentPoints, points);

  nextLevelButton.onclick = () => {
    popup.style.display = 'none';

    // Переход на следующий уровень
    level += 1;
    if (levelData[level]) {
      loadLevel(level); // Загружаем новый уровень
    } else {
      alert('Поздравляем, вы прошли все уровни!');
    }
  };

    mainMenu.onclick = () => {
      popup.style.display = 'none';
      document.getElementById('gameScreen').style.display = 'none';
      document.getElementById('mainMenu').style.display = 'flex';
    };
  }

  // Сброс игры
  restartButton.addEventListener('click', () => {
    loadLevel(level);
  });

  // Возврат в главное меню
  menuButton.addEventListener('click', () => {
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('mainMenu').style.display = 'flex';
  });

  // Инициализация первого уровня
  loadLevel(level);

  const prevCharacterButton = document.getElementById('prevCharacterButton');
  const nextCharacterButton = document.getElementById('nextCharacterButton');
  const characterDisplay = document.getElementById('characterDisplay');
  let progress = 0;
  let currentCharacterIndex = 0;

  // Плавное заполнение прогресс-бара
  const interval = setInterval(() => {
    progress += 20;
    progressBar.style.width = `${progress}%`;

    if (progress >= 110) {
      clearInterval(interval);
      startButton.classList.remove('hidden');
    }
  }, 700);

  // Переход к главному меню
  startButton.addEventListener('click', () => {
    splashScreen.style.display = 'none';
    mainMenu.style.display = 'flex';
    backgroundMusic.play().catch(console.error);
	// Запускаем видео
    if (backgroundVideo) {
      backgroundVideo.play().catch(error => {
        console.error('Не удалось воспроизвести видео:', error);
      });
	 }
  });
  
   // Переход на страницу Game
  continueGameButton.addEventListener('click', () => {
	mainMenu.style.display = 'none';
    gameScreen.style.display = 'flex';
	startMusicWithDelay();
	 if (backgroundVideo) {
      backgroundVideo.pause();
      backgroundVideo.currentTime = 0; // Сбрасываем позицию воспроизведения
    }
  });

  // Переход к экрану выбора персонажа
  startNewGameButton.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    characterSelection.style.display = 'flex';
	 if (backgroundVideo) {
      backgroundVideo.pause();
      backgroundVideo.currentTime = 0; // Сбрасываем позицию воспроизведения
    }
  });

  // Возврат в главное меню
  backToMenuButton.addEventListener('click', () => {
    characterSelection.style.display = 'none';
	gameScreen.style.display = 'none';
    mainMenu.style.display = 'flex';
	backgroundVideo.play();
  });
  
  
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
      
    }
  });

  // Логика переключения персонажей
  const updateCharacterDisplay = () => {
    const characters = document.querySelectorAll('.character');
    characters.forEach((char, index) => {
      char.style.display = index === currentCharacterIndex ? 'block' : 'none';
    });
  };

  prevCharacterButton.addEventListener('click', () => {
    currentCharacterIndex = (currentCharacterIndex - 1 + 3) % 3;
    updateCharacterDisplay();
  });

  nextCharacterButton.addEventListener('click', () => {
    currentCharacterIndex = (currentCharacterIndex + 1) % 3;
    updateCharacterDisplay();
  });

  updateCharacterDisplay();
  
});