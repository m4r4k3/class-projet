import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import { BrowserRouter, RouterProvider } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);
