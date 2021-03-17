import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";
import {Redirect} from "react-router";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    });

    let messagesElements = props.dialogsPage.messages.map((message => {
        return <Message text={message.message} id={message.id} key={message.id}/>
    }))

    // let newMessageBody = props.dialogsPage.newMessageText;
    //
    // let onSendMessageClick = () => {
    //     props.sendMessage();
    // }
    //
    // let onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.messageChange(body);
    // }

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                 { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>{ messagesElements }</div>
                <div>
                    {/*<div>*/}
                    {/*    <textarea placeholder='Enter your message' value={newMessageBody} onChange={onNewMessageChange}/>*/}
                    {/*</div>*/}
                    {/*<button onClick={onSendMessageClick}>Add post</button>*/}
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Enter your message' name={'newMessageBody'} component={Textarea} validate={[required, maxLength50]}/>
            <div><button>Add post</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'message'
})(AddMessageForm)

export default Dialogs;