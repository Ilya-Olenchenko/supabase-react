import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { supabase } from '../client'
const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});

    useEffect(() => {
        fetchPosts()
    }, [params.id])


    async function fetchPosts() {
        const { data } = await supabase
            .from('posts')
            .select()
        setPost(data)
        
        console.log("data: ", data)
    }

  //https://supabase.com/docs/guides/with-react

    return (
        <div>
            <h1 className="postas">Вы открыли страницу поста c ID = {params.id}</h1>

            <div className="postas">{post.id}. {post.title}</div>

        </div>
    );
};

export default PostIdPage;