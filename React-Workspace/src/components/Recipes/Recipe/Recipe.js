import React, {useState, useEffect, Fragment} from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { createRecipe, updateRecipe, deleteRecipe} from '../../../actions/recipes';
import Recipes from '../Recipes';

import { Menu, Popover, Transition } from '@headlessui/react'
import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  PlusSmIcon,
  SearchIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
} from '@heroicons/react/solid'
import { BellIcon, FireIcon, HomeIcon, MenuIcon, TrendingUpIcon, UserGroupIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
      {(user?.result?._id === recipe?.creator) && (
        <div>
        <button style={{backgroundColor: "red"}} onClick={()=>setCurrentId(recipe._id)}>!!Edit Recipe!!</button>
        <button style={{backgroundColor: "blue"}} onClick={()=>dispatch(deleteRecipe(recipe._id))}>!!DeleteRecipe!!</button>
        </div>
      )
      }
    </div>
                              
  )
}

export default Recipe