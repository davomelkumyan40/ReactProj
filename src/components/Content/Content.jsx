import React from "react";
import contentStyles from "./Content.module.css";
import Profile from "./../Profile/Profile";
import Messages from "./../Messages/Messages";
import News from "./../News/News";
import More1 from "../More1/More1";
import More2 from "../More2/More2";
import {Route} from "react-router-dom";


const Content = (props) => {
    return (
            <div className={contentStyles.content}>
                <Route path="/profile" render={ () => <Profile state={props.state.profileState} addPost={props.addPost} /> } />
                <Route path="/news" render={ () => <News /> }/>
                <Route path="/messages" render={ () => <Messages state={props.state.messageState}/> } />
                <Route path="/m" render={ () => <More1 /> } />
                <Route path="/more2" render={ () => <More2 /> } />
            </div>
    );
}

export default Content;