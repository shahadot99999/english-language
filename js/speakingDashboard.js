// Get elements
const speakingInput = document.getElementById('speaking-input');
const speakingBtn = document.getElementById('speaking-btn');
const speakingProgress = document.getElementById('speaking-progress');
const speakingFeedback = document.getElementById('speaking-feedback');

const readingInput = document.getElementById('reading-input');
const readingBtn = document.getElementById('reading-btn');
const readingProgress = document.getElementById('reading-progress');
const readingFeedback = document.getElementById('reading-feedback');

const listeningInput = document.getElementById('listening-input');
const listeningBtn = document.getElementById('listening-btn');
const listeningProgress = document.getElementById('listening-progress');
const listeningFeedback = document.getElementById('listening-feedback');

const overallBtn = document.getElementById('overall-btn');
const overallPerformance = document.getElementById('overall-performance');

const clearBtn = document.getElementById('clear-btn');  // Reset button
//console.log(clearBtn);

// Update progress and feedback
const updateProgress = (input, progressBar, feedback, skill) => {
  const value = parseInt(input.value);
  if (value >= 0 && value <= 10) {
    progressBar.value = value;
    feedback.textContent = `Your ${skill} score: ${value}/10`;
  } else {
    feedback.textContent = `Please rate your ${skill} between 0 and 10.`;
  }
};

// Event listeners for each skill
speakingBtn.addEventListener('click', () => {
  updateProgress(speakingInput, speakingProgress, speakingFeedback, 'Speaking');
});

readingBtn.addEventListener('click', () => {
  updateProgress(readingInput, readingProgress, readingFeedback, 'Reading');
});

listeningBtn.addEventListener('click', () => {
  updateProgress(listeningInput, listeningProgress, listeningFeedback, 'Listening');
});

// Calculate and display overall performance
overallBtn.addEventListener('click', () => {
  const speakingValue = speakingProgress.value;
  const readingValue = readingProgress.value;
  const listeningValue = listeningProgress.value;

  const totalScore = speakingValue + readingValue + listeningValue;
  const averageScore = totalScore / 3;

  overallPerformance.textContent = `Your Overall Performance: ${averageScore.toFixed(2)}/10`;
});

//Reset all fields and progress bars
clearBtn.addEventListener('click', () => {
  // Clear inputs
  speakingInput.value = '';
  readingInput.value = '';
  listeningInput.value = '';
  
  // Reset progress bars
  speakingProgress.value = 0;
  readingProgress.value = 0;
  listeningProgress.value = 0;

  // Reset feedback messages
  speakingFeedback.textContent = 'Rate your speaking from 0 to 10';
  readingFeedback.textContent = 'Rate your reading from 0 to 10';
  listeningFeedback.textContent = 'Rate your listening from 0 to 10';

  // Clear overall performance
  overallPerformance.textContent = '';
});







