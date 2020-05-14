import React from "react";
import profileStyles from "./Profile.module.css";
import Posts from "./Posts/Posts";


const Profile = (props) => {
    return (
    <div className={profileStyles.wrapper}>
        <div className={profileStyles.profile}>
            Profile
        </div>
        <div className={profileStyles.posts}>
            <Posts state={props.state.posts} addPost={props.addPost} />
        </div>
    </div>
    );
}

export default Profile;