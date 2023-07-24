import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyButton from './effect';
import { Route } from 'react-router-dom';
import Routing from './router/Main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Routing/>
    
  </React.StrictMode>
);


reportWebVitals();
