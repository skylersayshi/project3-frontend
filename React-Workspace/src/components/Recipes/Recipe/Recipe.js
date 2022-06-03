import React, {useState, useEffect} from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { createRecipe, updateRecipe, deleteRecipe} from '../../../actions/recipes';
import Recipes from '../Recipes';

const Recipe = ({recipe, currentId, setCurrentId}) => {

const dispatch = useDispatch();
const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <div>
      <div>
                                <a href={recipe.id} to={recipe.id} className="hover:underline">
                                  <time dateTime={recipe.createdAt}>{moment(recipe.createdAt).fromNow()}</time>
                                </a>
      </div>
      <div>
        {recipe.name}
      </div>
      <div>
        {recipe.ingredients}
      </div>
      <div>
        {recipe.instructions}
      </div>
      <div>
        {recipe.img}
      </div>
    </div>
  )
}

export default Recipe