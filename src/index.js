import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from "./js/store/index";
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();