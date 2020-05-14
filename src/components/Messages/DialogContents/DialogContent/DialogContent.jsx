import React from "react";
import dialoComStyles from "./DialogContent.module.css";

const DialogContent = (props) => {
    return (
    <div className={dialoComStyles.board}>
        <div>From: {props.user.name}</div>
        <div>Text: {props.content.text}</div>
    </div>);
}

export default DialogContent;