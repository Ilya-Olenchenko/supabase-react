import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import {useFetching} from "../hooks/useFetching";
import { supabase } from '../client'

const PostIdPage = () => {
    const params = useParams()
    const [posts, setPost] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await supabase.getById(id)
        setPost(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            <h1 className="postas">Вы открыли страницу поста c ID = {params.id}</h1>
            <div className="postas">id={posts.id}</div>
        </div>
    );
};

export default PostIdPage;