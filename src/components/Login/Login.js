import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import style from './Login.module.css'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";



const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('email', 'Email', 'email', [required], Input)}
            {createField('password', 'Password', 'password', [required], Input)}
            <div className={style.checkbox}>{createField('checkbox', null, 'rememberMe', null, Input, null, 'Remember me')}</div>

            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField(null , 'Symbols', 'captcha', null, Input)}

            {error && <div className={style.formSummaryError}>{error}</div>}
            <div><button>Login</button></div>
        </form>
    )
}

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login})(Login);