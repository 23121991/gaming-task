const startBtn = document.getElementById('startBtn');
const gameArea = document.getElementById('gameArea');
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');

let targetNumber = generateTargetNumber();

function generateTargetNumber() {
    const digits = new Set();
    while (digits.size < 4) {
        digits.add(Math.floor(Math.random() * 10));
    }
    return Array.from(digits).join('');
}

function checkGuess(userGuess) {
    let result = '';
    for (let i = 0; i < userGuess.length; i++) {
        if (userGuess[i] === targetNumber[i]) {
            result += '+';
        } else if (targetNumber.includes(userGuess[i])) {
            result += '_';
        } else {
            result += '*';
        }
    }
    return result;
}

startBtn.addEventListener('click', () => {
    gameArea.classList.remove('hidden');
    startBtn.disabled = true;
});

guessBtn.addEventListener('click', () => {
    const userGuess = guessInput.value;
    if (userGuess.length !== 4 || isNaN(userGuess)) {
        feedback.textContent = 'Please enter a valid 4-digit number.';
    } else {
        const guessResult = checkGuess(userGuess);
        feedback.textContent = guessResult;
        if (guessResult === '++++') {
            feedback.textContent = 'Congratulations! You guessed the number.';
            guessBtn.disabled = true;
        }
    }
});