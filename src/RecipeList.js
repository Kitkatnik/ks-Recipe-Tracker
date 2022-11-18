import React from "react";

import Recipe from './Recipe';

function RecipeList( { recipes, deleteRecipe } ) {
  
  // DONE: Display the list of recipes using the structure of table that is provided.
  // DONE: Create at least one additional component that is used by this component.
  // DONE: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th className="content_wide">Ingredients</th>
            <th className="content_wide">Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            recipes.map( (recipe, index) => {
              return (
                <Recipe 
                  recipe={recipe} 
                  key={index}
                  deleteRecipe={() => deleteRecipe(index)} 
                />)
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
