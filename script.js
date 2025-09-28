const gameContainer = document.getElementById("game-container");
const languageSelector = document.getElementById("language-selector");
const typingInput = document.getElementById("typing-input");
const gameOverPopup = document.getElementById("game-over-popup");
const retryButton = document.getElementById("retry-button");
let gameRunning = true;
let score = 0;
const scoreDisplay = document.getElementById("score");
const difficultyBar = document.getElementById("difficulty-bar");
let difficulty = 2;

const wordSets = {
    java: ["class", "public", "private", "extends", "implements"],
    python: ["def", "import", "class", "if", "elif", "else"],
    git: ["commit", "repository", "push", "pull", "clone", "branch", "checkout", "fetch", "merge"]
};

let activeWords = [];

languageSelector.addEventListener("change", () => {
    resetGame();
});

typingInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        removeMatchingWord(typingInput.value.trim());
        typingInput.value = "";
    }
});

retryButton.addEventListener("click", () => {
    gameOverPopup.style.display = "none";
    gameRunning = true;
    resetGame();
});

difficultyBar.addEventListener("click", (event) => {
    const level = event.target.closest(".difficulty-level").dataset.level;
    if (level) {
      difficulty = parseInt(level);
      updateDifficulty();
    }
  });
  function createWord() {
    const word = document.createElement("div");
    word.classList.add("word");
    const wordText = wordSets[Math.floor(Math.random() * wordSets.length)];
    word.textContent = wordText;
    word.style.top = "0px";
    word.style.left = `${Math.random() * (gameContainer.offsetWidth - 100)}px`;
    gameContainer.appendChild(word);
    return word;
  }

function spawnWord() {
    let speed = 1;
    switch (difficulty) {
      case 1:
        speed = 1;
        break;
      case 2:
        speed = 2;
        break;
      case 3:
        speed = 1000;
        break;
    } 
    console.log(`Difficulty level ${difficulty} - speed ${speed}`);
    const word = createWord();
    word.style.animationDuration = `${20 / speed}s`;
    if (!gameRunning) return;
    word.classList.add("word");
    word.textContent = getRandomWord();
    word.style.left = Math.random() * (gameContainer.offsetWidth - 100) + "px";
    word.style.top = "0px";
    gameContainer.appendChild(word);
    activeWords.push(word);
}

function getRandomWord() {
    const language = languageSelector.value;
    const words = wordSets[language];
    return words[Math.floor(Math.random() * words.length)];
}

function updateDifficulty() {
    const levels = difficultyBar.querySelectorAll(".difficulty-level");
    levels.forEach((level) => {
      level.classList.remove("active");
    });
    levels[difficulty - 1].classList.add("active");
  }

function updateGame() {
    if (!gameRunning) return;
    for (const word of activeWords) {
        const yPos = parseFloat(word.style.top || 0);
        const speed = 10; // Increase this value for faster words
        word.style.top = (yPos + speed) + "px";

        if (yPos + word.offsetHeight >= gameContainer.offsetHeight) {
            gameOver();
            break;
        }
    }
}

function gameOver() {
    gameRunning = false;
    activeWords.forEach(word => word.remove());
    activeWords = [];
    const finalScore = document.getElementById("final-score");
    finalScore.textContent = score;
    gameOverPopup.style.display = "block";
}

function resetGame() {
    activeWords.forEach(word => word.remove());
    activeWords = [];
    score = 0;
    scoreDisplay.textContent = score; // Update the score display
}


function removeMatchingWord(input) {
    let closestWord = null;
    let closestDistance = Infinity;

    activeWords.forEach(word => {
        if (word.textContent === input) {
            const yPos = parseFloat(word.style.top || 0);
            const distance = gameContainer.offsetHeight - yPos;
            if (distance < closestDistance) {
                closestDistance = distance;
                closestWord = word;
            }
        }
    });

    if (closestWord) {
        activeWords = activeWords.filter(word => word !== closestWord);
        closestWord.remove();
        score += 1;
        scoreDisplay.textContent = score; // Update the score display
    }
}

typingInput.focus(); // Focus the input bar when the screen loads
setInterval(spawnWord, 2000); // Adjust this value for word frequency
setInterval(updateGame, 20); // Adjust this value for smoother animation
