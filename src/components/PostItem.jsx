import React from 'react'
import classes from './PostItem.module.css'
import { useNavigate } from 'react-router-dom'


const PostItem = (props) => {

const navigate = useNavigate()

const handleClick = () => {
  navigate(`/posts/${props.post.id}`)
};
  return (
    <div className={classes.post}>
      <img className={classes.postImg} src={props.post.img_link}></img>
      <h1 className={classes.postTitle}>{props.post.title}</h1>
      <p className={classes.postTitle}>{props.post.id}</p>
      <button onClick={handleClick}>Navigate to..</button>
    </div>
  );
};

export default PostItem;