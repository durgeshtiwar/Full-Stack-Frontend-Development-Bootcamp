import React from 'react'
import Post from './Post';
import WelcomeMessage from './WelcomeMessage';
import { useLoaderData } from 'react-router-dom';


function PostList() {
  const postList = useLoaderData();
  

  return (
    <div>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post)=>
      <Post key={post.id} post={post}/>)}
    </div>
  )
}


export const postLoader=()=>{
      return fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(obj =>
      {
        return(obj.posts)
      });
      
}

export default PostList;