import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 30},
    ],
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('Test text');

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3) ;
});

it('content of 3 post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('Test text');

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts[2].message).toBe('Test text') ;
});

it('deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(1) ;
});

it(`deleting length of messages should not be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(152);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(2) ;
});
