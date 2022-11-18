import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const createRecipe = () => {};

  const deleteRecipe = (indexToDelete) => {
    setRecipes( (currentRecipe) => currentRecipe.filter( (_, index) => index !== indexToDelete));
  };

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList 
        recipes={recipes} 
        deleteRecipe={deleteRecipe}
      />
      <RecipeCreate 
        createRecipe={createRecipe}
      />
    </div>
  );
}

export default App;
