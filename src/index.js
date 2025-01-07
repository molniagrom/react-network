import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireFree = () => {

    console.log("Current store:", store);

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderEntireFree()

store.subscribe(() => {
    renderEntireFree();
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
