import React, { use, useState } from 'react';
import CreatePost from './CreatePost';
import GetPost from './GetPost';

function App() {
  const [showcreatePost, setShowCreatePost] = useState(false);
  const [showGetPost, setShowGetPost] = useState(false);

  return(
    <React.Fragment>
      <div>
        Welcome
      </div>
      <div>
        <button onClick={() => setShowCreatePost(true)}>Create Post</button>
        <button onClick={() => setShowGetPost(true)}>Get posts</button>
      </div>
      {showcreatePost && <CreatePost/>}
      {showGetPost && <GetPost/>}
    </React.Fragment>
  )
};

export default App;
