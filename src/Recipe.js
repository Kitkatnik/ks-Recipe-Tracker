import React from 'react';

const Recipe = ( { recipe, deleteRecipe } ) => {
    const { name, cuisine, photo, ingredients, preparation } = recipe;

    return(
        <tr>
            <td>
                <p>{name}</p>
            </td>
            <td>
                <p>{cuisine}</p>
            </td>
            <td>
                <img src={photo} alt={name} />
            </td>
            <td className="content_td content_wide">
                <p>{ingredients}</p>
            </td>
            <td className="content_td content_wide">
                <p>{preparation}</p>
            </td>
            <td>
                <button name="delete" id="delete" onClick={deleteRecipe}>Delete</button>
            </td>
        </tr>
    )

}

export default Recipe;