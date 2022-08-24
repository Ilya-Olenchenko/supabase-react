import './style/App.css';
import { useState, useEffect } from 'react'
import { supabase } from './client'
import PostList from './components/PostList'
import Header from './components/Header'

function App() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({ id: "", img_link: "", title: "", description: "", css: "", html: "", js: "" })
  const { id, img_link, title, description, css, html, js } = post

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const { data } = await supabase
      .from('posts')
      .select()
    setPosts(data)
    // console.log("data: ", data)
  }

  async function createPost() {
    await supabase
      .from('posts')
      .insert([
        { id, img_link, title, description, css, html, js }
      ])
      .single()
    setPost({ id: " ", img_link: "", title: "", description: "", css: "", html: "", js: "" })
    fetchPosts()
  }

  return (
    <div className="App">
      {
        /* <input
          placeholder="Title"
          value={title}
          onChange={e => setPost({ ...post, title: e.target.value })}
        />
        
        <input
          placeholder="description"
          value={description}
          onChange={e => setPost({ ...post, description: e.target.value })}
        />
        <button onClick={createPost}>Create Post</button> */
      }

      <Header />
      <div className='container'>
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;
