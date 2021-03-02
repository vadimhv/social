const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

const messagesReducer = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE) {
        state.newMessageText = action.body;
    } else if (action.type === SEND_MESSAGE) {
        let message = state.newMessageText;
        state.newMessageText = '';
        state.messages.push({id: 6, message: message});
    }

    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (message) => ({type: UPDATE_NEW_MESSAGE, body: message})

export default messagesReducer;