import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // you need to create App.js too
//import './index.css'; // optional if you have CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
