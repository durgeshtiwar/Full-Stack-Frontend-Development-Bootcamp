import React, { useContext } from 'react'
import Post from './Post';
import {PostList as PostListData} from '../store/post-list-store';

function PostList() {
  const {postlist} = useContext (PostListData);
  return (
    <div>
      
      
    </div>
  )
}

export default PostList;