import React, {useState, useEffect, Fragment} from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { createRecipe, updateRecipe, deleteRecipe} from '../../../actions/recipes';
import Recipes from '../Recipes';
import { PaperClipIcon } from '@heroicons/react/solid'

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

    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Recipe Information</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Recipe Name: </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{recipe.name}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Ingredients: </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{recipe.ingredients}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Instructions:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                           {recipe.instructions}   
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Image</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="ml-2 flex-1 w-0 truncate">
                      {recipe.img ? (   
                        
                      <img className='rounded-lg object-contain' src={recipe.img} height={250} width={250} />) : null } </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                  </div>
                  <div>      
                      <button style={{backgroundColor: "red", marginRight: 10}} onClick={()=>setCurrentId(recipe._id)}>!!Edit Recipe!!</button>
                      <button style={{backgroundColor: "blue"}} onClick={()=>dispatch(deleteRecipe(recipe._id))}>!!DeleteRecipe!!</button>
                 </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

//     <div>
//       <div>
//                                 <a href={recipe.id} to={recipe.id} className="hover:underline">
//                                   <time dateTime={recipe.createdAt}>{moment(recipe.createdAt).fromNow()}</time>
//                                 </a>
//       </div>
//       <div>
        
//         <h1>Recipe Name: {recipe.name}</h1>
//       </div>


//       <br />


//       <div>

//       <h1>Ingredients: {recipe.ingredients}</h1>
        
//       </div>


//       <br />


//       <div>
//       <h1>Instructions: {recipe.instructions}</h1>
        
//       </div>


//       <br />


//       <div>
        
//        <img src={recipe.img === '' ? recipe.selectedFile : recipe.img}></img> 
//         {/* <img src={image} height={100} width={100} /> */}
//       </div>
//       {(user?.result?._id === recipe?.creator) && (
//         <div>
//         <button style={{backgroundColor: "red"}} onClick={()=>setCurrentId(recipe._id)}>!!Edit Recipe!!</button>
//         <button style={{backgroundColor: "blue"}} onClick={()=>dispatch(deleteRecipe(recipe._id))}>!!DeleteRecipe!!</button>
//         </div>
//       )
//       }
//     </div>
                              
//   )
// }

export default Recipe