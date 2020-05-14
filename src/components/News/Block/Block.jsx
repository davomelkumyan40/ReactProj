import React from "react";
import blockStyles from "./Block.module.css";

const Block = (props) =>{
    return (
    <div className={blockStyles.block}>
        <h2>{props.header}</h2>
        <span>{props.information}</span>
    </div>
    );
}

export default Block;