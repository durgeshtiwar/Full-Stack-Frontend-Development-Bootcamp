import React, { useContext } from 'react'
import Post from './Post';
import {PostList as PostListData} from '../store/post-list-store';
import WelcomeMessage from './WelcomeMessage';

function PostList() {
  const {postList, addInitialPosts} = useContext(PostListData);
  const handleGetPostClick = () =>
  {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(obj =>
    {
      addInitialPosts(obj.posts);
    }
    );
  }
  return (
    <div>
      {postList.length === 0 && <WelcomeMessage onGetPostClick = {handleGetPostClick} />}
      {postList.map((post)=>
      <Post key={post.id} post={post}/>)}
    </div>
  )
}

export default PostList;