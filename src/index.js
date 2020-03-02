import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";


import App from './App';


const app = (

    <BrowserRouter>
    
    <App/>

    
    </BrowserRouter>


)

ReactDOM.render(app, document.getElementById('root'));