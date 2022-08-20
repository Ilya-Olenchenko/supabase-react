import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts }) => {
    return (
        posts.map(post => (
            <div key={post.id}>
                <PostItem post={post} />
            </div>
        )).reverse()
    );
}

export default PostList;