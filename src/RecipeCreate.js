import React, { useState } from "react";

function RecipeCreate( {createRecipe } ) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </td>
            <td>
              <input 
                name="cuisine" 
                id="cuisine"
                placeholder="Cuisine"
                required
              />
            </td>
            <td>
              <input 
                name="photo" 
                id="photo"
                placeholder="URL"
                required
              />
            </td>
            <td className="content_wide">
              <textarea 
                name="ingredients" 
                id="ingredients"
                placeholder="Ingredients"
                required
              />
            </td>
            <td className="content_wide">
              <textarea 
                name="preparation"
                id="preparation"
                placeholder="Preparation"
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
