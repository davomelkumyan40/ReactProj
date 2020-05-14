import React from "react";
import postsStyles from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {

    let textAreaElem = React.createRef();

    let clickHandler = (e) => {
        props.addPost(textAreaElem.current.value);
        textAreaElem.current.value = "";
    }

    return(
        <div className={postsStyles.desk}>
            <div className={postsStyles.postBoard}>
                <div className={postsStyles.wrapper}>
                    <textarea ref={textAreaElem} className={postsStyles.textbox} placeholder="Type Post..."></textarea>
                    <div className={postsStyles.wrap}><button onClick={clickHandler} className={postsStyles.button}>Post</button></div>
                </div>
            </div>
            {props.state.map((post, index) => <Post key={index} message={post.message} />)}
        </div>
    );
}

export default Posts;