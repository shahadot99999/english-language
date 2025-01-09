const translateButton = document.getElementById("translateButton");
const cleanButton = document.getElementById("cleanBtn");

const englishInput = document.getElementById("englishInput");
const spanishTranslation = document.getElementById("spanishTranslation");
const frenchTranslation = document.getElementById("frenchTranslation");
const germanTranslation = document.getElementById("germanTranslation");

// Predefined translations for simplicity
const translations = {
  hello: { spanish: "hola", french: "bonjour", german: "hallo" },
  goodbye: { spanish: "adiós", french: "au revoir", german: "auf wiedersehen" },
  thank: { spanish: "gracias", french: "merci", german: "danke" },
  yes: { spanish: "sí", french: "oui", german: "ja" },
  no: { spanish: "no", french: "non", german: "nein" },
};

// Event listener for the translate button
translateButton.addEventListener("click", function () {
  const englishText = englishInput.value.trim().toLowerCase();

  if (englishText === "") {
    alert("Please enter text in English to translate!");
    return;
  }

  // Fetch translations or show "not available"
  const translation = translations[englishText] || {
    spanish: "Not available",
    french: "Not available",
    german: "Not available",
  };

  // Update translations in the UI
  spanishTranslation.textContent = translation.spanish;
  frenchTranslation.textContent = translation.french;
  germanTranslation.textContent = translation.german;
});

//clean everything when refresh
cleanButton.addEventListener("click", function(){
    //input clear
    englishInput.value=" ";

    //3 type laguge are clean
    spanishTranslation.textContent = "";
    frenchTranslation.textContent = "";
    germanTranslation.textContent = "";
   

})