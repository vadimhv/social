import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className="content">
          <Navbar />
          <Route component={Profile} path='/profile' />
          <Route component={Dialogs} path='/dialogs' />
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
