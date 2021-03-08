import classes from "../../Users/Users.module.css";
import spinner from "../../../assets/img/spinner.gif";
import React from "react";

const Preloader = (props) => {
    return <div className={classes.loaderBlock}><img src={spinner} /></div>
}

export default Preloader;