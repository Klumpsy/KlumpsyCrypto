import React from "react";
import ReactDOM from "react-dom";

//Routing
import { BrowserRouter as Router } from 'react-router-dom'; 

//Redux state 
import { Provider } from "react-redux";
import store from "./app/store";

import App from './App'

ReactDOM.render(
<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>, document.getElementById('root')
); 