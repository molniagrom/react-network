import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addMessage, addPost, upDateMessageText, upDatePostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

// addPost("Samurai")

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireFree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    upDatePostText={upDatePostText}
                    addPost={addPost}
                    addMessage={addMessage}
                    upDateMessageText={upDateMessageText}
                />
            </BrowserRouter>
        </React.StrictMode>
    );

}
