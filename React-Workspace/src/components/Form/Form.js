
import React, {useState, useEffect, Fragment} from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { Listbox, Transition } from '@headlessui/react'
import { CalendarIcon, PaperClipIcon, TagIcon, UserCircleIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Form = ({currentId, setCurrentId}) => {

    const user = JSON.parse(localStorage.getItem('profile'));

    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
        profilePic: '',
      });

      const post = useSelector((state)=> currentId ? state.posts.find((specificPost)=> specificPost._id === currentId) : null);
    
      const dispatch = useDispatch();

      useEffect(()=>{
        if(post) setPostData(post);
      }, [post])
    
      const handleSubmit = async (event) =>{
        event.preventDefault();
        if(currentId===0){
          dispatch(createPost({...postData, name: user?.result?.name, profilePic: user?.result?.selectedFile}))
          
        } else {        
          dispatch(updatePost(currentId, {...postData, name: user?.result?.name, profilePic: user?.result?.selectedFile}));
          
        }
        clear();
      }
    
      const clear = () => {
        setCurrentId(0);
        setPostData({
          creator: '',
          title: '',
          message: '',
          tags: '',
          selectedFile: '',
          profilePic: '',
        })
      }

    if(!user?.result?.name){
      return (
        <div>Please login to make a post</div>
      )
    }

    return (
      <form autoComplete="off" onSubmit={handleSubmit} className="relative">
      <div className="mb-4 border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        <div className="w-full border-b border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3 bg-gray-800">
            <div >
              <div              
                className="-ml-2 -my-2 rounded-full px-3 py-2 inline-flex text-left text-gray-400"
              >
                <img
                  className="w-10 h-10 rounded-full m-1"
                  src={user?.result?.selectedFile}
                  alt=""
                />
              </div>
            </div>
            <div className="block text-xl text-left font-medium focus:ring-0 -mr-2">
              <div
                className="text-gray-300 mr-2"
              >
                {user?.result?.name}
              </div>
            </div>
          </div>
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          type="text" 
          id="title" 
          name="title"
          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
          placeholder="Title"
          value={postData.title}
          onChange={(e)=>{setPostData({...postData, title: e.target.value})}}
        />
        <label htmlFor="message" className="sr-only">
          Description
        </label>
        <textarea
          rows={2}
          name="message"
          id="message"
          className="block w-full border-0 py-0 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Write a message..."
          value={postData.message}
          onChange={(e)=>{setPostData({...postData, message: e.target.value})}}         
        />
        <label htmlFor="tags" className="sr-only">
          Tags
        </label>
        <input 
          type="text" 
          id="tags" 
          name="tags"
          label="Tags"
          placeholder="#tags (ex: fitness, goals, fun)"
          className="block m-2 rounded-md resize-none text-indigo-500 placeholder-indigo-500 focus:ring-0 sm:text-sm"
          value={postData.tags}
          onChange={(e)=>{setPostData({...postData, tags: e.target.value.split(',')})}}       
        />

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>         
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-px">        
        <div className="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3">
          <div className="flex">
            <button
              type="button"
              className="-ml-2 -my-2 rounded-full px-3 py-2 inline-flex items-center text-left text-gray-400 group"
            >
              {/* <PaperClipIcon className="-ml-1 h-5 w-5 mr-2 group-hover:text-gray-500" aria-hidden="true"> */}
                <div>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64})=> setPostData({...postData, selectedFile: base64})}
                  />
                  
                </div>
              
              {/* <span className="text-sm text-gray-500 group-hover:text-gray-600 italic">Attach a file</span> */}
            </button>
          </div>
          <div className="flex-shrink-0">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
      )
  }


export default Form




























{/* <div>
          <p>{currentId ? 'Edit Post' : 'New Post'}</p>
          <form autoComplete="off" onSubmit={handleSubmit} > */}
            {/* <label htmlFor="creator">Creator</label>
            <input 
              type="text" 
              id="creator" 
              name="creator"
              label="Creator"
              value={postData.creator}
              onChange={(e)=>{setPostData({...postData, creator: e.target.value})}}       
            /> */}
        //     <label htmlFor="title">Title</label>
        //     <input 
        //       type="text" 
        //       id="title" 
        //       name="title"
        //       label="Title"
        //       value={postData.title}
        //       onChange={(e)=>{setPostData({...postData, title: e.target.value})}}       
        //     />
        //     <label htmlFor="message">Message</label>
        //     <input 
        //       type="text" 
        //       id="message" 
        //       name="message"
        //       label="Message"
        //       value={postData.message}
        //       onChange={(e)=>{setPostData({...postData, message: e.target.value})}}       
        //     />
        //     <label htmlFor="tags">Tags</label>
        //     <input 
        //       type="text" 
        //       id="tags" 
        //       name="tags"
        //       label="Tags"
        //       value={postData.tags}
        //       onChange={(e)=>{setPostData({...postData, tags: e.target.value.split(', ')})}}       
        //     />
        //     <div>
        //         <FileBase
        //           type="file"
        //           multiple={false}
        //           onDone={({base64})=> setPostData({...postData, selectedFile: base64})}
        //         />
        //     </div>
        //     <button type="submit">Submit</button>
        //     <button onClick={clear}>Clear</button>
        //   </form>
        // </div>