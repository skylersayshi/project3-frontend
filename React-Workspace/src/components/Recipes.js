import React, { useEffect, useState } from 'react'
import {fetchRecipes} from '../api/recipes'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    
    useEffect(() => {
        fetchRecipes()
        .then((fetchedRecipes) => {
            setRecipes(fetchedRecipes.data)
        })
    }, [])
const elements = recipes.map((recipe) =>{
   return( <div className="recipes">
        {console.log(recipe)}
        {recipe.name}
        
        </div>
)})
console.log(elements)
  return (
    <div>Recipes
        {elements}

    </div>
  )
}

export default Recipes