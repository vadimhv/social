import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let messageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <Dialogs dialogsPage={state} sendMessage={sendMessage} messageChange={messageChange}/>
    )
}

export default DialogsContainer;