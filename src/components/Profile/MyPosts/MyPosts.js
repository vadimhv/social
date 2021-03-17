import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} liked={post.likesCount} id={post.id} key={post.id}/>)
    let newPostElement = React.createRef();

  // let onAddPost = () => {
  //   props.addPost();
  // }
  //
  // let onPostChange = () => {
  //     let text = newPostElement.current.value;
  //     props.onPostChange(text);
  // }

    const onAddPost = (values) => {
        props.addPost(values.newPostBody);
    }
    return (
      <div>
        My posts
        <div>
          <AddPostFormRedux onSubmit={onAddPost}/>
        </div>
        <div className={classes.posts}>
          {postsElements}
        </div>
      </div>
    )
}

const maxLength10 = maxLengthCreator(10);
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostBody'} validate={[required, maxLength10]} placeholder={'Post message'}/>
            </div>
            <button>Add post</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: 'addPost'
})(AddPostForm);

export default MyPosts;