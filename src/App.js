import React, { Suspense }  from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom'
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from './redux/redux-store';
import {withSuspense} from "./hoc/withSuspense";



const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        } else {
            return (
                <BrowserRouter>
                    <div className='app-wrapper'>
                        <HeaderContainer/>
                        <div className="content">
                            <Navbar/>
                            <Route render={withSuspense(ProfileContainer)} path='/profile/:userId?'/>
                            <Route render={withSuspense(DialogsContainer)} path='/dialogs'/>
                            <Route render={withSuspense(UsersContainer)} path='/users'/>
                            <Route render={withSuspense(Login)} path='/login'/>
                        </div>
                    </div>
                </BrowserRouter>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;