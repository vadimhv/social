import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messages-reducer";
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


let AuthRedirectComponent = withAuthRedirect(Dialogs);

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

export default compose(connect(mapStateToProps, mapDispatchToProps))(AuthRedirectComponent);
