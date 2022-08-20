import React from 'react'
import classes from './PostItem.module.css'

const PostItem = (props) => {
  return (
    <div className={classes.post}>
        <img className={classes.postImg} src={props.post.img_link}></img>
        <h1 className={classes.postTitle}>{props.post.title}</h1>
    </div>
  );
};

export default PostItem;