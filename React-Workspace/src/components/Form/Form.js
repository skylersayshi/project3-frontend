
import React, {useState, useEffect} from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({currentId, setCurrentId}) => {

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
      });

      const post = useSelector((state)=> currentId ? state.posts.find((specificPost)=> specificPost._id === currentId) : null);
    
      const dispatch = useDispatch();

      useEffect(()=>{
        if(post) setPostData(post);
      }, [post])
    
      const handleSubmit = (event) =>{
        event.preventDefault();
        if(currentId){
          dispatch(updatePost(currentId, postData))
          
        } else {        
          dispatch(createPost(postData));
          
        }
        clear();
      }
    
      const clear = () => {
        setCurrentId(null);
        setPostData({
          creator: '',
          title: '',
          message: '',
          tags: '',
          selectedFile: ''})
      }

    

    return (
        <div>
          <p>{currentId ? 'Edit Post' : 'New Post'}</p>
          <form autoComplete="off" onSubmit={handleSubmit} >
            <label htmlFor="creator">Creator</label>
            <input 
              type="text" 
              id="creator" 
              name="creator"
              label="Creator"
              value={postData.creator}
              onChange={(e)=>{setPostData({...postData, creator: e.target.value})}}       
            />
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              id="title" 
              name="title"
              label="Title"
              value={postData.title}
              onChange={(e)=>{setPostData({...postData, title: e.target.value})}}       
            />
            <label htmlFor="message">Message</label>
            <input 
              type="text" 
              id="message" 
              name="message"
              label="Message"
              value={postData.message}
              onChange={(e)=>{setPostData({...postData, message: e.target.value})}}       
            />
            <label htmlFor="tags">Tags</label>
            <input 
              type="text" 
              id="tags" 
              name="tags"
              label="Tags"
              value={postData.tags}
              onChange={(e)=>{setPostData({...postData, tags: e.target.value})}}       
            />
            <div>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({base64})=> setPostData({...postData, selectedFile: base64})}
                />
            </div>
            <button type="submit">Submit</button>
            <button onClick={clear}>Clear</button>
          </form>
        </div>
      )
          }


export default Form


