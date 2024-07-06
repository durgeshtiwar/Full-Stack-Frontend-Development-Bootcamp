import { createContext, useReducer } from "react";


export const PostList = createContext({
    postList : [],
    addPost : () =>{},
    deletePost : () => {},
  });


const postListReducer = (currentPostList,action) =>{
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter((post) => post.id !== action.payload.postId)
  }
  return newPostList;
};

const PostListProvider = ({children})=>{
  const [postList, dispatchPostList] = useReducer(postListReducer , DEFAULT_POST_LIST);
  const addPost = ()=>{};
  const deletePost = (postId)=>
    {
      dispatchPostList({
        type : "DELETE_POST",
        payload : {
          postId,
        },
      });
    };
  return (<PostList.Provider value={{postList , addPost ,deletePost}}>
    {children}</PostList.Provider>);
};

const DEFAULT_POST_LIST = [
{
  id:1, 
  title:"Go To Mumbai", 
  body:"Heyy, I'm going to Mumbai for my Vacation. Hope to Enjoy a lot. Peace Out.",
  reactions:2,
  userId:"User_4",
  tages:["Mumbai","Enjoy","Vacations"]
},
{
  id:2, 
  title:"Pass ho gye", 
  body:"Pass To ho gye but abhi Result nhi aya hai usi ka wait kr rhe hai. Abhi To prepration chl rhi hai.",
  reactions:15,
  userId:"User_8",
  tages:["Pass","Result","Prepration"],
},
];

export default PostListProvider;