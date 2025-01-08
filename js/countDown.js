// Elements
const timerDisplay = document.getElementById('timer-display');
const timeInput = document.getElementById('time-input');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

// Variables
let countdown;
let remainingTime = 0;

// Format time (HH:MM:SS)
function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

// Start Timer
startBtn.addEventListener('click', () => {
  clearInterval(countdown); // Clear previous timer if any
  const inputTime = parseInt(timeInput.value, 10);

  if (!inputTime || inputTime <= 0) {
    alert('Please enter a valid time in seconds!');
    return;
  }

  remainingTime = inputTime;
  timerDisplay.textContent = formatTime(remainingTime);

  countdown = setInterval(() => {
    remainingTime--;
    timerDisplay.textContent = formatTime(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "Time's Up!";
    }
  }, 1000);
});

// Reset Timer
resetBtn.addEventListener('click', () => {
  clearInterval(countdown);
  remainingTime = 0;
  timerDisplay.textContent = '00:00:00';
  timeInput.value = '';
});