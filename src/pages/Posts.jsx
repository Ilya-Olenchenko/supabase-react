import '../style/App.css';
import { supabase } from '../client'
import PostList from '../components/PostList'
import { useState, useEffect } from 'react'

function Posts() {
  const [posts, setPosts] = useState([])

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

  const [post, setPost] = useState({ id: "", img_link: "", title: "", description: "", css: "", html: "", js: "" })

  const { id, img_link, title, description, css, html, js } = post
  async function createPost() {
    await supabase
      .from('posts')
      .insert([
        { id, img_link, title, description, css, html, js }
      ])
      .single()
    setPost({ id: "", img_link: "", title: "", description: "", css: "", html: "", js: "" })
    fetchPosts()
  }

  return (
    <div className="App">

      <div className='container'>
        <input
          placeholder="img_link"
          value={img_link}
          onChange={e => setPost({ ...post, img_link: e.target.value })}
        />

        <input
          placeholder="Title"
          value={title}
          onChange={e => setPost({ ...post, title: e.target.value })}
        />

        <input
          placeholder="description"
          value={description}
          onChange={e => setPost({ ...post, description: e.target.value })}
        />

        <input
          type="checkbox"
          placeholder="css"
          value={css}
          onChange={e => setPost({ ...post, css: e.target.value })}
        />

        <input
          type="checkbox"
          placeholder="html"
          value={html}
          onChange={e => setPost({ ...post, html: e.target.value })}
        />

        <input
          type="checkbox"
          placeholder="js"
          value={js}
          onChange={e => setPost({ ...post, js: e.target.value })}
        />

        <button onClick={createPost}>Create Post</button>

        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default Posts;
