import Post from './Post/Post';
import Form from '../Form/Form';
import ChangeThis from '../ChangeThis';

import { useSelector } from 'react-redux';

const Posts = ({currentId, setCurrentId}) => {

    const posts = useSelector((state)=>state.posts);
    const sortedPosts = posts.sort((a, b)=> b.creator - a.creator)

    // console.log(sortedPosts);
    

  return (
    !posts.length ? <ChangeThis /> : (
      <div>
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
          <ul role="list" className="space-y-4">
          { 
          sortedPosts.map((post)=>(

            <Post key={post._id} post={post} currentId={currentId} setCurrentId={setCurrentId}/>

          ))
          .sort((a, b)=> a.creator - b.creator)}
          </ul>
      </div>
    )
  )
}

export default Posts