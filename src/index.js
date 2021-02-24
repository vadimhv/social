import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './render/state';

let rerenderEntireContent = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireContent(store.getState());
store.subscribe(rerenderEntireContent);


