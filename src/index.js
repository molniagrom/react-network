import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log("Current store:", store);

root.render(
    // 87 урок
//         Для тех у кого классовая компонента рендерится 2 раза, даже с PureComponent.
//         Долго не мог понять почему такое происходит, в пропсах никаких обновлений стейта
//         не прилетает, что бы происходил ререндер, выяснил что два раза рендерится еще до того как компонент монтируется.
//         Как оказалось сам компонент тут не причем. Всё дело
//         в ReactStrictMode которым у меня был обернут App, в index.js. Этот стрикт мод помогает лучше
//         отлавливать ошибки разработчикам, поэтому и рендерится по два раза. Если его убрать, рендер происходит один раз.

    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
