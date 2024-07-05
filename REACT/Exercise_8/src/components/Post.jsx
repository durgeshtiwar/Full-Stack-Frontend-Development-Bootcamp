import React from 'react'

function Post({post}) {
  return (
    <div className="card post-card" style={{width: "18rem"}}>
    <div className="card-body">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {post.reactions}
  </span>
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    {post.tages.map((tag)=><span class="badge text-bg-primary tage">{tag}</span>)}
    
  </div>
</div>
  )
}

export default Post;