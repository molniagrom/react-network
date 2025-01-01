import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
 // debugger
let renderEntireFree = (state) => {

    console.log("Current store:", store);

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                    store={store}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderEntireFree(store.getState())

store.subscribe(() => {
    renderEntireFree(store.getState());
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
