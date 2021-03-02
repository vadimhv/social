import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 30},
            ],
            newPostText: ''
        },
        messagesPage: {
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
    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubsriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._callSubsriber(this._state);
    },

}

export default store;
window.store = store;