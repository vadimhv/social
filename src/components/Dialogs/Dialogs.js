import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Vadym'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Sveta'},
    ]

    let dialogsElements = dialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    });

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let messagesElements = messagesData.map((message => {
        return <Message text={message.message} id={message.id}/>
    }))

    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                 { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;