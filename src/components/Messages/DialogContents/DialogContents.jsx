import React from "react";
import DialogContent from "./DialogContent/DialogContent";
import dialogContentStyles from "./DialogContents.module.css";
import { Route } from "react-router-dom";


const DialogContents = (props) =>{
    return (
        <div className={dialogContentStyles.dialogContents}>
           {props.state.map( (content, index) => <Route key={index} path={`/messages/dialogs/dialog/${content.id}`} render={() => <DialogContent key={index} content={content} user={props.state[content.id - 1]} />}/>)}
        </div>
    );
}

export default DialogContents;