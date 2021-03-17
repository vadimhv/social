import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        debugger;
        if (!this.props.initialized) {
            return <Preloader />
        } else {
            return (
                <BrowserRouter>
                    <div className='app-wrapper'>
                        <HeaderContainer/>
                        <div className="content">
                            <Navbar/>
                            <Route render={() => <ProfileContainer/>} path='/profile/:userId?'/>
                            <Route render={() => <DialogsContainer/>} path='/dialogs'/>
                            <Route render={() => <UsersContainer/>} path='/users'/>
                            <Route render={() => <Login/>} path='/login'/>
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

export default compose(withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
