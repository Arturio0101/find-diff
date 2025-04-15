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
  
  
  const differenceAreaContainer = document.getElementById('differenceAreaContainer');
  const differencesFound = document.getElementById('differencesFound');
  const restartButton = document.getElementById('restartButton');
  const menuButton = document.getElementById('menuButton');
  
  
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
		  document.getElementById('fireworksCanvas').style.zIndex = '1';
			startFireworks();
			setTimeout(() => {
			showPopup();
		}, 2200); // Ожидаем окончания салюта
	  }
    });
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
  
let level = 1;
let points = 0;

function showPopup() {
  const popup = document.getElementById("popup");
  const pointsElem = document.getElementById("points");
  const levelElem = document.getElementById("level");
  const progressElem = document.getElementById("progress");

  // Показываем поп-ап
  popup.style.display = 'flex'; 

  // Анимация очков
  let currentPoints = 0;
  const targetPoints = 1500; // Целевые очки
  const pointSpeed = 10;

  const pointsInterval = setInterval(() => {
    if (currentPoints < targetPoints) {
      currentPoints += Math.ceil(targetPoints / 150); // Увеличиваем равномерно
      pointsElem.textContent = currentPoints;
    } else {
      pointsElem.textContent = targetPoints;
      clearInterval(pointsInterval);
    }
  }, pointSpeed);

  // Прогресс-бар (75%)
  progressElem.style.width = "75%";

  // Уровень
  levelElem.textContent = level;

  // Кнопки
  document.getElementById("nextLevel").onclick = () => {
    console.log("Следующий уровень");
    popup.classList.add("hidden");
    // Логика перехода на следующий уровень
  };

  document.getElementById("mainMenu").onclick = () => {
    console.log("Главное меню");
    popup.classList.add("hidden");
    // Логика возврата в главное меню
  };
}
  
  // Запускаем анимацию главного меню при загрузке
window.addEventListener('load', () => {
  const menu = document.querySelector('.menu-options');
  menu.style.animationDelay = '0.3s'; // Задержка для эффекта
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
    splashScreen.style.display = 'none';
	gameScreen.style.display = 'none';
    mainMenu.style.display = 'flex';
    backgroundMusic.play().catch(console.error);
	 backgroundVideo.style.display = 'block'; 
	 backgroundVideo.play();
  });
  

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