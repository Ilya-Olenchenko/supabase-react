import './style/App.css';
import { useState, useEffect } from 'react'
import { supabase } from './client'
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({ title: "", content: "" })
  const { title, content } = post

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const { data } = await supabase
      .from('posts')
      .select()
    setPosts(data)
    console.log("data: ", data)
  }

  async function createPost() {
    await supabase
      .from('posts')
      .insert([
        { title, content }
      ])
      .single()
    setPost({ title: "", content: "" })
    fetchPosts()
  }

  return (
    <div className="App">
      <header>

      </header>
      {
        /* <input
          placeholder="Title"
          value={title}
          onChange={e => setPost({ ...post, title: e.target.value })}
        />
        
        <input
          placeholder="Content"
          value={content}
          onChange={e => setPost({ ...post, content: e.target.value })}
        />
        <button onClick={createPost}>Create Post</button> */
      }
      
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
