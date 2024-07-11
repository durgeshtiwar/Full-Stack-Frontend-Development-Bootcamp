import React, { useContext, useEffect, useState } from 'react'
import Post from './Post';
import {PostList as PostListData} from '../store/post-list-store';
import WelcomeMessage from './WelcomeMessage';
import LoadingSpinner from './LoadingSpinner';

function PostList() {
  const {postList, addInitialPosts} = useContext(PostListData);
  const [fetchingData, setFetchingData] = useState(false);

  // useEffect(()=>{
  //   setFetchingData(true);
  //   fetch('https://dummyjson.com/posts')
  //   .then(res => res.json())
  //   .then(obj =>
  //   {
  //     addInitialPosts(obj.posts);
  //     setFetchingData(false);
  //   });
    
  // },[]);


  return (
    <div>
      {fetchingData && <LoadingSpinner/>}
      {!fetchingData &&  postList.length === 0 && <WelcomeMessage />}
      {!fetchingData &&  postList.map((post)=>
      <Post key={post.id} post={post}/>)}
    </div>
  )
}

export default PostList;