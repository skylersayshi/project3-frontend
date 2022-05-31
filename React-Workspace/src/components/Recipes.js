import React, { useEffect, useState } from 'react'
import {fetchRecipes} from '../api/recipes'
import '../App.css'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    
    useEffect(() => {
        fetchRecipes()
        .then((fetchedRecipes) => {
            setRecipes(fetchedRecipes.data)
            console.log(recipes)
        })
    }, [])
const elements = recipes.map((recipe) =>{
   return( <div className="recipes">
        {console.log(recipe)}

        <div className="name">
        {recipe.name}
        </div>

        <div className="instructions">
        {recipe.instructions}
        </div>

        <div className="ingredients">

        {recipe.ingredients}

        </div>

      <div className="img">
       <img src={recipe.img} alt=""  /> 
      </div>

        </div>
)})
console.log(elements)
  return (
    <div className="header">Recipes
        {elements}

    </div>
  )
}

export default Recipes