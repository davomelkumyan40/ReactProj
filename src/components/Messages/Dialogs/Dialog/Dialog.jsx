import React from "react";
import dialogStyles from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
        return (
            <NavLink className={dialogStyles.item} activeClassName={dialogStyles.active} to={`/messages/dialogs/dialog/${props.user.id}`}>
                <div className={dialogStyles.profile}></div>
                <div>{`${props.user.name} ${props.user.sname}`}</div>
            </NavLink>
        );
 }

export default Dialog;