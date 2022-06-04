import Post from './Post/Post';
import Form from '../Form/Form';
import ChangeThis from '../ChangeThis';

import { useSelector } from 'react-redux';

const Posts = ({currentId, setCurrentId, posts}) => {

    
    // let sortedPosts = []
    // for(let i = posts.length-1; i >= 0; i--){
    //   sortedPosts.push(posts[i])
    // }
    // console.log(sortedPosts);
    
    

  return (
    !posts.length ? <ChangeThis /> : (
      <div>
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
          <ul role="list" className="space-y-4">
          { 
            posts.map((post)=>(

            <Post key={post._id} post={post} currentId={currentId} setCurrentId={setCurrentId}/>

          ))
          }
          </ul>
      </div>
    )
  )
}

export default Posts