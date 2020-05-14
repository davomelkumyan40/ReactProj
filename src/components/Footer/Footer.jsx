import React from "react";
import footerStyles from "./Footer.module.css";


const Footer = () => {
    return (
    <div className={footerStyles.footer}>
        <div className={footerStyles.item}>Some Text</div>
        <div className={footerStyles.item}>Some Text</div>
        <div className={footerStyles.item}>Some Text</div>
    </div>);
}

export default Footer;