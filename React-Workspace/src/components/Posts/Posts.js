import Post from './Post/Post';
import Form from '../Form/Form';
import ChangeThis from '../ChangeThis';

import { useSelector } from 'react-redux';

const Posts = ({currentId, setCurrentId}) => {

    const posts = useSelector((state)=>state.posts);

    console.log(posts);

  return (
    !posts.length ? <ChangeThis /> : (
      <div>
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
          <ul role="list" className="space-y-4">
          {posts.map((post)=>(

            <Post key={post._id} post={post} currentId={currentId} setCurrentId={setCurrentId}/>

          ))}
          </ul>
      </div>
    )
  )
}

export default Posts