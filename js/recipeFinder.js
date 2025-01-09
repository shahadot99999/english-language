document.getElementById("searchButton").addEventListener("click", function () {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();

    // Clear previous results
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";

    if (query === "") {
      recipeList.innerHTML = "<li>Please enter a keyword to search for recipes!</li>";
      return;
    }

    // Sample recipes data
    const sampleRecipes = [
      "Chicken Alfredo",
      "Spaghetti Carbonara",
      "Vegetable Stir Fry",
      "Beef Tacos",
      "Garlic Butter Shrimp",
      "Chocolate Cake",
    ];

    // Filter recipes
    const filteredRecipes = sampleRecipes.filter(recipe => recipe.toLowerCase().includes(query));

    // Display results
    if (filteredRecipes.length > 0) {
      filteredRecipes.forEach(recipe => {
        const li = document.createElement("li");
        li.textContent = recipe;
        recipeList.appendChild(li);
      });
    } else {
      recipeList.innerHTML = "<li>No recipes found for your search.</li>";
    }
  });