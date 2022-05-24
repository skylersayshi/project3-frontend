import Post from './Post/Post';
import ChangeThis from '../ChangeThis';

import { useSelector } from 'react-redux';

const Posts = () => {

    const posts = useSelector((state)=>state.posts);

    console.log(posts);

  return (
    !posts.length ? <ChangeThis /> : (
      <div>
        
        {posts.map((post)=>(
          <Post key={post._id} post={post}/>
        ))}
      </div>
    )
  )
}

export default Posts