import React from 'react'
import PostItem from './PostItem'
import classes from './PostList.module.css'

const PostList = ({ posts }) => {
    return (
        posts.map(post => (
            <div key={post.id}>
                <PostItem post={post} />
            </div>
        ))
    );
}

export default PostList;