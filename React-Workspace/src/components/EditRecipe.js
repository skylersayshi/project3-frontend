import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function updateRecipe() {
  const navigate = useNavigate()
  const { id } = useParams()
  const recipes = recipes.find(p => p._id === id)
  

  const [editRecipe, setEditRecipe] = useState(recipes)

  
  const handleChange = event => {
      setEditRecipe({ ...editRecipe, [event.target.name]: event.target.value })
  }

  
  const handleSubmit = event => {
      event.preventDefault()
      updateRecipe(editRecipe, id)
      navigate('/recipes')
  }

  return (
      <div className="recipes">
          <h1>{recipes.name}</h1>
          <h2>{recipes.title}</h2>
          <img src={recipes.image} alt={recipes.name} />
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  value={editRecipe.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
              />
              <input
                  type="text"
                  value={editRecipe.img}
                  name="img"
                  placeholder="image URL"
                  onChange={handleChange}
              />
              <input
                  type="text"
                  value={editRecipe.ingredients}
                  name="ingredients"
                  placeholder="title"
                  onChange={handleChange}
              />

              <input
                  type="text"
                  value={editRecipe.instructions}
                  name="instructions"
                  placeholder="title"
                  onChange={handleChange}
              />
              <input type="submit" value="Update recipes" />
          </form>
      </div>
  ) 
}

export default updateRecipe