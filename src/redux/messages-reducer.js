const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Vadym'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Sveta'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
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