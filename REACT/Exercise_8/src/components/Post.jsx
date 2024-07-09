import React, { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { PostList } from '../store/post-list-store';

function Post({post}) {
  const {deletePost} = useContext(PostList);
  return (
    <div className="card post-card" style={{width: "30rem"}}>
    <div className="card-body">
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delbtn"
    onClick={()=>(deletePost(post.id))}
    >
    <MdDelete/>
  </span>
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag)=><span key={tag} className="badge text-bg-primary tage">{tag}</span>)}
    
  </div>
  <div className="alert alert-success reactions" role="alert">
    This Post has been reacted by {post.reactions.likes} People.
  </div>
</div>
  )
}

export default Post;