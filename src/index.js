import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/redux-store';
import SamuraiJSApp from "./App";

ReactDOM.render(<SamuraiJSApp />, document.getElementById('root'));

window.store = store;


