import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function NewRecipes () {
    const [newRecipe, setNewRecipe] = useState({
        name: '',
        img: '',
        ingredients: '',
        instructions: ''
    })
    const navigate = useNavigate()
    
    const handleChange = (event) => {
        console.log(event.target.value)
        setNewRecipe({...newRecipe, [event.target.name]: event.target.value})
    }

  async function createRecipes (recipe) {
        await fetch('http://localhost:5001/recipes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe)
        }),
        navigate('/recipes')
    
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createRecipes(newRecipe);
        setNewRecipe({
            name: '',
            img: '',
            instructions: '',
            ingredients: ''
        })
    }
  return (
      <> 
    <div>NewRecipes</div>

    <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={newRecipe.name}
                        name='name'
                        placeholder='name'
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        value={newRecipe.img}
                        name='img'
                        placeholder='image URL'
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        value={newRecipe.instructions}
                        name='instructions'
                        placeholder='instructions'
                        onChange={handleChange}
                    />
                      <input
                        type='text'
                        value={newRecipe.ingredients}
                        name='ingredients'
                        placeholder='ingredients'
                        onChange={handleChange}
                    />
                    <input type='submit' value='Create Recipe!' />
                </form>

      </>
    
  )
}

export default NewRecipes