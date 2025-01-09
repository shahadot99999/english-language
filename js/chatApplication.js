const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const refreshButton = document.getElementById("refresh");


// Event listener for the send button
sendButton.addEventListener("click", function () {
  const message = messageInput.value.trim();

  if (message === "") {
    alert("Please type a message before sending!");
    return;
  }

  // Add the user's message to the chat box
  const userMessage = document.createElement("div");
  userMessage.className = "text-right mb-2";
  userMessage.innerHTML = `<span class="bg-blue-500 text-white px-3 py-2 rounded-lg inline-block">${message}</span>`;
  chatBox.appendChild(userMessage);

  // Clear the input field
  messageInput.value = "";

  // Auto-reply (simple simulation)
  setTimeout(() => {
    const botReply = document.createElement("div");
    botReply.className = "text-left mb-2";
    botReply.innerHTML = `<span class="bg-gray-300 text-black px-3 py-2 rounded-lg inline-block">I received: ${message}</span>`;
    chatBox.appendChild(botReply);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
});

  // Event listener for the reset button
  refreshButton.addEventListener("click", function () {
    // Clear the chat box
    chatBox.innerHTML = "";

    // Clear the input field
    messageInput.value = "";
  });