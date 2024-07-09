import React from 'react'

function WelcomeMessage({onGetPostClick}) {
  return (
    <center class="container">
    <div class="bg-body-tertiary p-5 rounded mt-3">
    <h1> There are no Posts</h1>
    <button class="btn btn-lg btn-primary" onClick={onGetPostClick}>View Posts</button>
    </div>
    </center>
  )
}

export default WelcomeMessage