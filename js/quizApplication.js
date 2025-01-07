 // Select Elements
 const submitBtn = document.getElementById('submit-btn');
 const resultSection = document.getElementById('result-section');
 const scoreSpan = document.getElementById('score');
 const correctAnswer = "Cheerful";

 // Handle Quiz Submission
 submitBtn.addEventListener('click', () => {
   // Get Selected Answer
   const selectedOption = document.querySelector('input[name="question1"]:checked');

   if (selectedOption) {
     // Check Answer
     const userAnswer = selectedOption.value;
     const score = userAnswer === correctAnswer ? 1 : 0;

     // Show Result
     scoreSpan.textContent = score;
     resultSection.classList.remove('hidden');
   } else {
     alert("Please select an answer!");
   }
 });