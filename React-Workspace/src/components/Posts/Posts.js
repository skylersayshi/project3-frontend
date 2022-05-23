import Post from './Post/Post';

import { useSelector } from 'react-redux';

const Posts = () => {

    const posts = useSelector((state)=>state.posts);

    console.log(posts);

  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Posts