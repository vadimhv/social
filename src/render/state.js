let store = {
    _state: {
        profilePage : {
            posts : [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 30},
            ],
            newPostText: ''
        },
        messagesPage : {
            dialogs : [
                {id: 1, name: 'Vadym'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Andrew'},
                {id: 4, name: 'Viktor'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Sveta'},
            ],
            messages : [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        }


    },
    getState() {
        return this._state;
    },

    _rerenderEntireTree() {
        console.log('State changed')
    },

    dispatch(action){
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._rerenderEntireTree(this._state);
            this._state.profilePage.newPostText = '';
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state);
        }
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    }
}

export default store;
window.store = store;