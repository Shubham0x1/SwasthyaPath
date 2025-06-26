import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // remove this line if you don't use it

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
