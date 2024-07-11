import React, { useContext, useRef } from 'react'
import { PostList } from '../store/post-list-store';

function CreatePost() {

 const{addPost} = useContext(PostList);


  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const likesElement = useRef();
  const disLikesElement = useRef();
  const tageElement = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postContent = postContentElement.current.value;
    const Nlikes = Number(likesElement.current.value);
    const NdisLikes = Number(disLikesElement.current.value);
    const tags = tageElement.current.value.split(" ");
    
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postContentElement.current.value = "";
    likesElement.current.value = "";
    disLikesElement.current.value = "";
    tageElement.current.value = "";
    

    

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        title: postTitle, 
        body: postContent,
        reactions: {likes : Nlikes,
          dislikes : NdisLikes,
        },
        userId: userId,
        tags: tags,
      },)
    })
    .then(res => res.json())
    .then(post => {
      addPost(post);
    });

  };

  return (
    <form className='create-post' onSubmit={handleSubmit}>
  <div className="mb-3 ">
  <div className="mb-3 ">
    <label htmlFor="id" className="form-label">Post UserId - </label>
    <input type="text" ref={userIdElement} className="form-control" id="id" placeholder='Please Enter Your UserId here'/>
  </div>
    <label htmlFor="title" className="form-label">Post Title - </label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder='Enter Your Post Title here'/>
  </div>
  <div className="mb-3 ">
    <label htmlFor="body" className="form-label">Post Content - </label>
    <textarea type="text" ref={postContentElement} className="form-control" id="body" placeholder='Enter Your Post Content here...'/>
  </div>
  <div className="mb-3 ">
    All Reactions in this Post - <br/>
    <label htmlFor="likes" className="form-label">No. of Likes - </label><br/>
    <input type="text" ref={likesElement} className="form-control" id="reaction"/>

    <label htmlFor="dislikes" className="form-label">No. of Dislikes - </label><br/>
    <input type="text" ref={disLikesElement} className="form-control" id="reaction"/>

  </div>
  <div className="mb-3 ">
    <label htmlFor="tage" className="form-label">Enter Your Hashtages - </label>
    <input type="text" ref={tageElement} className="form-control" id="tage" placeholder='Enter Hashtages using Space..'/>
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  )
}

export default CreatePost;