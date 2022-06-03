import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ChangeThis from '../ChangeThis';
import RecipeForm from './Form/RecipeForm';
import Recipe from './Recipe/Recipe';
import { useDispatch } from 'react-redux';
import { getRecipes } from '../../actions/recipes';



const Recipes = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    const recipes = useSelector((state)=>state.recipes);
    console.log(recipes);

    useEffect(()=>{
      dispatch(getRecipes());
    }, [currentId, dispatch]);

  return (
    // !recipes.length ? <ChangeThis /> : (
    <div>
        <RecipeForm currentId={currentId} setCurrentId={setCurrentId}/>
        
            {recipes.map((recipe)=>(
                <Recipe key={recipe._id} recipe={recipe} currentId={currentId} setCurrentId={setCurrentId}/>
            ))}
        
    </div>
    )
  // )
}

export default Recipes




















// import React, { useEffect, useState } from 'react'
// import {fetchRecipes} from '../api/recipes'
// import '../App.css'
// import {Link} from 'react-router-dom'

// const Recipes = () => {
//     const [recipes, setRecipes] = useState([])
    
//     useEffect(() => {
//         fetchRecipes()
//         .then((fetchedRecipes) => {
//             setRecipes(fetchedRecipes.data)
//             console.log(recipes)
//         })
//     }, [])
// const elements = recipes.map((recipe) =>{
//    return( 

//     <div className="container">
       
//    <div className="recipes">

 
//         {console.log(recipe)}
//         <div className="name">
//         <h4>Name: {recipe.name}</h4>
//         </div>

//         <br />

//         <div className="instructions">
//         <h4>
          
//           Instructions: {recipe.instructions}
//           </h4>
//         </div>

//       <br />

//         <div className="ingredients">

//         <h4>
          
//           Ingredients: {recipe.ingredients}
          
//           </h4>

//         </div>

//         <br />

//       <div className="img">
//        <img src={recipe.img} alt=""  /> 
//       </div>
//          {/* <Link to=`/recipes/${recipe.id}`>Edit Recipe</Link> */}
//         </div>

//         </div>
// )})

// console.log(elements)


//   return (
//     <div className="header"> <h1>Healthy Recipe List</h1>

//         <Link to='/recipes/new'>Add A New Recipe
//         {console.log('getting clicked')}</Link>
    
//         {elements}


//     </div>
//   )
// }

// export default Recipes