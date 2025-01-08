  // Elements
  const progressBtn = document.getElementById('progress-btn');
  const progressDisplay = document.getElementById('progress-display');
  const checkboxes = document.querySelectorAll('.checkbox');

  // Progress Check Functionality
  progressBtn.addEventListener('click', () => {
    const totalCheckboxes = checkboxes.length;
    const checkedBoxes = document.querySelectorAll('.checkbox:checked').length;

    //console.log(checkedBoxes);

    const progress = Math.round((checkedBoxes / totalCheckboxes) * 100);
    progressDisplay.textContent = `Your weekly progress: ${progress}%`;
  });