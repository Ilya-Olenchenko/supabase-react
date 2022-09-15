import React from 'react'
import classes from './PostItem.module.css'
import {useHistory} from 'react-router-dom';

const PostItem = (props) => {
  const router = useHistory()
  return (

    <div className={classes.post}>
      <img className={classes.postImg} src={props.post.img_link}></img>
      <h1 className={classes.postTitle}>{props.post.title}</h1>
      <p className={classes.postTitle}>{props.post.id}</p>

      <button onClick={() => router.push(`/posts/${props.post.id}`)}>
        Open
        </button>
    </div>
  );
};

export default PostItem;