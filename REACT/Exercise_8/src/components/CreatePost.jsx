import React from 'react'
import { Form, redirect } from 'react-router-dom';
function CreatePost() {

 //const{addPost} = useContext(PostList);
 

  return (
  <Form method = "POST" className='create-post'>
  <div className="mb-3 ">
  <div className="mb-3 ">
    <label htmlFor="id" className="form-label">Post UserId - </label>
    <input type="text" name='userId' className="form-control" id="id" placeholder='Please Enter Your UserId here'/>
  </div>
    <label htmlFor="title" className="form-label">Post Title - </label>
    <input type="text" name='title' className="form-control" id="title" placeholder='Enter Your Post Title here'/>
  </div>
  <div className="mb-3 ">
    <label htmlFor="body" className="form-label">Post Content - </label>
    <textarea type="text" name='body' className="form-control" id="body" placeholder='Enter Your Post Content here...'/>
  </div>
  <div className="mb-3 ">
    All Reactions in this Post - <br/>
    <label htmlFor="likes" className="form-label">No. of Likes - </label><br/>
    <input type="text" name='likes' className="form-control" id="reaction"/>

    <label htmlFor="dislikes" className="form-label">No. of Dislikes - </label><br/>
    <input type="text" name='disLikes' className="form-control" id="reaction"/>

  </div>
  <div className="mb-3 ">
    <label htmlFor="tage" className="form-label">Enter Your Hashtages - </label>
    <input type="text" name='tags' className="form-control" id="tage" placeholder='Enter Hashtages using Space..'/>
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</Form>
  )
}

export async function createPostAction (data)
{
  const fromData = await data.request.formData();
  const postData = Object.fromEntries(fromData);
  postData.tags = postData.tags.split(" ");
  const likes = postData.likes;
  const disLikes = postData.disLikes;
  const reactionObj = {likes,disLikes};
  postData.reactions = reactionObj;
  delete postData.likes;
  delete postData.disLikes;
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(post => {
  console.log(post);
  });
  return redirect("/");

}



export default CreatePost;