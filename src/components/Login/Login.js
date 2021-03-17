import React from 'react';
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import style from './Login.module.css'
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field type="text" placeholder={"Email"} component={Input} name={"email"} validate={[required]}/>
            <Field type="password" placeholder={"Password"} component={Input} name={"password"} validate={[required]}/>
            <div className={style.checkbox}><Field type="checkbox" component={Input} name={"rememberMe"} /> <div>Remember me</div></div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);