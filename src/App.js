import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className="content">
          <Navbar />
          <Route render={() => <Profile stateProfile={props.state.profilePage} dispatch={props.dispatch} />}  path='/profile' />
          <Route render={() => <Dialogs stateDialogs={props.state.messagesPage} dispatch={props.dispatch} />} path='/dialogs' />
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
