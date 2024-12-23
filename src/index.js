import reportWebVitals from './reportWebVitals';
import {store} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// addPost("Samurai")
const root = ReactDOM.createRoot(document.getElementById('root'));

 let renderEntireFree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    upDatePostText={store.upDatePostText.bind(store)}
                    addPost={store.addPost.bind(store)}
                    addMessage={store.addMessage.bind(store)}
                    upDateMessageText={store.upDateMessageText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}


renderEntireFree(store.getState())

store.subscribe(renderEntireFree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
