import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://www.csuohio.edu/sites/default/files/Shine%20Well-logo-social-web.png' />

            <div className={classes.loginBlock}>
                {props.isAuth ? <div> <button onClick={props.logout}>Log out</button> </div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;