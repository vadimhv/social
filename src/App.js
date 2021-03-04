import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, BrowserRouter} from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className="content">
          <Navbar />
          <Route render={() => <Profile store={props.store} />}  path='/profile' />
          <Route render={() => <DialogsContainer store={props.store} />} path='/dialogs' />
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
