import React from "react";
import postStyles from "./Post.module.css";

const Post = (props) => {
    return (
    <div className={postStyles.item}>
            <div>
                <div className={postStyles.user}></div>
            </div>
            <div className={postStyles.message}>
                <span>{props.message}</span>
            </div>
         <div className={postStyles.like}>Like</div>
    </div>
    );
}

export default Post;