import React, { useContext, useEffect } from 'react'
import Post from './Post';
import {PostList as PostListData} from '../store/post-list-store';
import WelcomeMessage from './WelcomeMessage';

function PostList() {
  const {postList, addInitialPosts} = useContext(PostListData);

  useEffect(()=>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(obj =>
    {
      addInitialPosts(obj.posts);
    });
  },[])


  return (
    <div>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post)=>
      <Post key={post.id} post={post}/>)}
    </div>
  )
}

export default PostList;