import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./main.css";
import { Provider } from 'react-redux';
import store from "./global";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
          <App />
    </Provider>  
     );

