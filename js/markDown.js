const markdownInput = document.getElementById("markdownInput");
const previewButton = document.getElementById("previewButton");
const clearMarkButton = document.getElementById("clearMarkButton");
const previewContent = document.getElementById("previewContent");

// Event listener for the preview button
previewButton.addEventListener("click", function () {
  const markdownText = markdownInput.value;

  // Convert markdown to HTML using marked.js
  const htmlContent = marked.parse(markdownText);

  // Update the preview section
  previewContent.innerHTML = htmlContent;
});

// Event listener for the clear button
clearMarkButton.addEventListener("click", function () {
  // Clear the input and preview sections
  markdownInput.value = "";
  previewContent.innerHTML = "";
});