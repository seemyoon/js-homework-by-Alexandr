// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
const baseUrl = 'https://dummyjson.com'
getRecipes = baseUrl + "/recipes"
fetch(getRecipes)
    .then(value => value.json())
    .then((responce) => {
        let recipes = responce["recipes"];
        const divRecipes = document.getElementsByClassName("recipes")[0]
        for (const recipe of recipes) {
            // console.log(recipe)
            const divRecipe = document.createElement("div");
            divRecipe.classList.add("recipe");
            divRecipes.appendChild(divRecipe);
            const id = document.createElement("h3");
            id.innerText = `Id recipe: ${recipe.id}`;
            divRecipe.appendChild(id);
            const name = document.createElement("h2");
            name.innerText = `Name: ${recipe.name}`;
            id.before(name);
            const ingredientsHealing = document.createElement("h3");
            ingredientsHealing.innerText = "Ingredients:";
            id.after(ingredientsHealing);
            const ol = document.createElement("ol");
            ingredientsHealing.after(ol);
            recipe["ingredients"].forEach((ingredient) => {
                const li = document.createElement("li");
                li.innerHTML = ingredient;
                ol.appendChild(li)
            })
            const paragraphInstructions = document.createElement("p");
            paragraphInstructions.innerText = recipe["instructions"].join(" ")
            paragraphInstructions.classList.add("paragraphInstructions");
            ol.after(paragraphInstructions);
            const img = document.createElement("img");
            img.setAttribute("src", `${recipe["image"]}`)
            paragraphInstructions.after(img);
            const cookTimeMinutes = document.createElement("h4");
            cookTimeMinutes.innerText = `Cook time: ${recipe.cookTimeMinutes}`;
            img.after(cookTimeMinutes);
            const cuisine = document.createElement("h4");
            cuisine.innerText = `Cuisine: ${recipe.cuisine}`;
            cookTimeMinutes.after(cuisine);
            const difficulty = document.createElement("h4");
            difficulty.innerText = `Difficulty: ${recipe.difficulty}`;
            cuisine.after(difficulty);
            const mealType = document.createElement("h4");
            mealType.innerText = `Meal type: ${recipe.mealType}`;
            difficulty.after(mealType);
            const prepTimeMinutes = document.createElement("h4");
            prepTimeMinutes.innerText = `Prep time minutes: ${recipe.prepTimeMinutes}`;
            mealType.after(prepTimeMinutes);
            const rating = document.createElement("h4");
            rating.innerText = `Rating ⭐️: ${recipe.rating}`;
            prepTimeMinutes.after(rating);
            const reviewCount = document.createElement("h4");
            reviewCount.innerText = `Review count️: ${recipe.reviewCount}`;
            rating.after(reviewCount);
            const servings = document.createElement("h4");
            servings.innerText = `Servings: ${recipe.servings}`;
            reviewCount.after(servings);
            const tags = document.createElement("h4");
            tags.innerText = `Tags:`;
            tags.classList.add("healingTags");
            servings.after(tags);
            const ol2 = document.createElement("ol");
            tags.after(ol2);
            ol2.classList.add("listTags");
            recipe["tags"].forEach((tag) => {
                const li = document.createElement("li");
                li.innerHTML = `#${tag.toLowerCase()}`;
                ol2.appendChild(li)
            })
        }
    })