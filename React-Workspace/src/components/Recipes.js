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
        <h4>Name: {recipe.name}</h4>
        </div>

        <br />

        <div className="instructions">
        <h4>
          
          Instructions: {recipe.instructions}
          </h4>
        </div>

      <br />

        <div className="ingredients">

        <h4>
          
          Ingredients: {recipe.ingredients}
          
          </h4>

        </div>

        <br />

      <div className="img">
       <img src={recipe.img} alt=""  /> 
      </div>

        </div>
)})

console.log(elements)


  return (
    <div className="header"> <h1>Healthy Recipe List</h1>
        {elements}

    </div>
  )
}

export default Recipes