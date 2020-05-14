import React from "react";
import mesStyles from "./Messages.module.css";
import DialogContents from "./DialogContents/DialogContents";
import Dialogs from "./Dialogs/Dialogs";



const Messages = (props) => {
    return (
        <div className={mesStyles.wrapper}>
            <Dialogs state={props.state.dialogs} />
            <DialogContents state={props.state.dialogContents} />
        </div>
    );
}

export default Messages;