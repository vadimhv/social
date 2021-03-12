import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, BrowserRouter} from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <div className="content">
          <Navbar />
          <Route render={() => <ProfileContainer  />}  path='/profile/:userId?' />
          <Route render={() => <DialogsContainer  />} path='/dialogs' />
          <Route render={() => <UsersContainer  />} path='/users' />
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
