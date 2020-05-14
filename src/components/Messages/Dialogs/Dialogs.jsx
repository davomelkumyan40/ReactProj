import React from "react";
import dialogsStyles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
    return (
    <div className={dialogsStyles.dialogsWrapper}>
        {props.state.map((dialog, index) => <Dialog key={index} user={dialog}/>)}
    </div>);
}


export default Dialogs;