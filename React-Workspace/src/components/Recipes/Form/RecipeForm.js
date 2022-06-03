import React, {useState, useEffect, Fragment} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createRecipe, updateRecipe } from '../../../actions/recipes';
import FileBase from 'react-file-base64';

const RecipeForm = ({currentId, setCurrentId}) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  const [recipeData, setRecipeData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    img: '',
    selectedFile: '',

  });

  const recipe = useSelector((state)=> currentId ? state.recipes.find((specificRecipe)=>specificRecipe._id === currentId): null)
  console.log(recipe);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(recipe) setRecipeData(recipe);
  }, [recipe]);

  const clear = () => {
    setCurrentId(0);
    setRecipeData({
      name: '',
      instructions: '',
      ingredients: '',
      img: '',
    })
  }

  const handleSubmit = async (event) =>{
    event.preventDefault();
    if(currentId===0){
      dispatch(createRecipe({...recipeData}))
      
    } else {        
      dispatch(updateRecipe(currentId, {...recipeData}));
      
    }
    clear();
  }

  // const handleChange = (e) =>{
  //   setRecipeData({...recipeData, [e.target.name]: e.target.value});
  // }


  if(!user?.result?.name){
    return (
      <div>Please login to make a post</div>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          name="name"
          id="name"
          onChange={(e)=>{setRecipeData({...recipeData, name: e.target.value})}}
          placeholder="Recipe Name"
          value={recipeData.name}
        />
        <input 
          name="ingredients"
          id="ingredients"
          onChange={(e)=>{setRecipeData({...recipeData, ingredients: e.target.value})}}
          placeholder="Ingredients"
          value={recipeData.ingredients}
        />
        <input 
          name="instructions"
          id="instructions"
          onChange={(e)=>{setRecipeData({...recipeData, instructions: e.target.value})}}
          placeholder="instructions"
          value={recipeData.instructions}
        />
        <input 
          name="img"
          id="img"
          onChange={(e)=>{setRecipeData({...recipeData, img: e.target.value})}}
          placeholder="img"
          value={recipeData.img}
        />

        <div>Or...Upload your own Image</div>


        <div className='mt-2'>
          <div className='mt-2'>Choose Recipe Image</div>
           <FileBase
           type="file"
           multiple={false}
           onDone={({base64})=> setRecipeData({...recipeData, selectedFile: base64})}
           value={recipeData.selectedFile}
            />

            </div>



        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RecipeForm