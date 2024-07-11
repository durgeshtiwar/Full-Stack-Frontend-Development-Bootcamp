import React, { useContext } from 'react'
import Post from './Post';
import {PostList as PostListData} from '../store/post-list-store';
import WelcomeMessage from './WelcomeMessage';
import LoadingSpinner from './LoadingSpinner';

function PostList() {
  const {postList, fetchingData} = useContext(PostListData);
  

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