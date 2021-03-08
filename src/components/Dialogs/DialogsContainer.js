import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        messageChange: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;