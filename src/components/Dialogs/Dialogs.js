import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    });

    let messagesElements = props.dialogsPage.messages.map((message => {
        return <Message text={message.message} id={message.id}/>
    }))

    let newMessageBody = props.dialogsPage.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.messageChange(body);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                 { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message' value={newMessageBody} onChange={onNewMessageChange}/>
                    </div>
                    <button onClick={onSendMessageClick}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;