import React from 'react'
import classes from './PostList.module.css'
const PostList = ({ posts }) => {
    return (
        <div>
            <div className={classes.conteiner}>
                {
                    posts.map(post => (
                        <div key={post.id}>
                            <p className={classes.postTitle}>{post.title}</p>
                            <p className={classes.postContent}>{post.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default PostList;