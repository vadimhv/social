import React from 'react';
import classes from './../DialogItem.module.css';

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.text}
        </div>
    )
}

export default Message;