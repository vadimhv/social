import React from 'react';
import {sendMessageCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
        // messageChange: (body) => {
        //     dispatch(updateNewMessageBodyCreator(body));
        // }
    }
}

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs);
