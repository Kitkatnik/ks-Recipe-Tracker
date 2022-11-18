import React, { useState } from "react";

function RecipeCreate( { createRecipe } ) {

  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  const [newRecipes, setNewRecipe ] = useState(initialState)

  const onChangeHandler = ( { target } ) => {
    setNewRecipe({
      ...newRecipes,
      [target.name]: target.value
    });
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const onSubmitHandler = (event) => {
    event.preventDefault();
    createRecipe(newRecipes);
    setNewRecipe({...initialState});
  }
  
  return (
    <form name="create" onSubmit={onSubmitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                name="name"
                id="name"
                placeholder="Name"
                type="text"
                onChange={onChangeHandler}
                value={newRecipes.name}
                required
              />
            </td>
            <td>
              <input 
                name="cuisine" 
                id="cuisine"
                placeholder="Cuisine"
                type="text"
                onChange={onChangeHandler}
                value={newRecipes.cuisine}
                required
              />
            </td>
            <td>
              <input 
                name="photo" 
                id="photo"
                placeholder="URL"
                type="text"
                onChange={onChangeHandler}
                value={newRecipes.photo}
                required
              />
            </td>
            <td className="content_wide">
              <textarea 
                name="ingredients" 
                id="ingredients"
                placeholder="Ingredients"
                type="text"
                onChange={onChangeHandler}
                value={newRecipes.ingredients}
                required
              />
            </td>
            <td className="content_wide">
              <textarea 
                name="preparation"
                id="preparation"
                placeholder="Preparation"
                type="text"
                onChange={onChangeHandler}
                value={newRecipes.preparation}
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
