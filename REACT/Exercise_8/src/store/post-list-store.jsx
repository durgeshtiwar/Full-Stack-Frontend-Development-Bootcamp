import { useEffect } from "react";
import { useState } from "react";
import { createContext, useReducer } from "react";


export const PostList = createContext({
    postList : [],
    addPost : () =>{}, 
    fetchingData : false,
    deletePost : () => {},
  });


const postListReducer = (currentPostList,action) =>{
  
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter((post) => post.id !== action.payload.postId)
  } else if(action.type === "ADD_INITIAL_POST")
  {
    newPostList = action.payload.posts;
    //console.log(newPostList);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.post , ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({children})=>{
  const [postList, dispatchPostList] = useReducer(postListReducer , []);
  const [fetchingData, setFetchingData] = useState(false);

  const addPost = (post)=>
    {

      dispatchPostList({
        type : "ADD_POST",
        payload : {
          post,
        },
      });
    };

    const addInitialPosts = (posts)=>
      {
        dispatchPostList({
          type : "ADD_INITIAL_POST",
          payload : {
          posts,
        },
        });
        
      };

  const deletePost = (postId)=>
    {
      dispatchPostList({
        type : "DELETE_POST",
        payload : {
          postId,
        },
      });
    };
    useEffect(()=>{
      setFetchingData(true);
      fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(obj =>
      {
        addInitialPosts(obj.posts);
        setFetchingData(false);
      });
      
    },[]);
  return (<PostList.Provider value={{postList , addPost, fetchingData ,deletePost}}>
    {children}</PostList.Provider>);
};


export default PostListProvider;