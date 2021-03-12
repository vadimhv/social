import React from 'react';
import {Redirect} from "react-router";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isAuth: state.isAuth
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth === false) {
                return <Redirect to={'/login'} />
            }

            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}