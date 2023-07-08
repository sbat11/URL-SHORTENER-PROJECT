import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACt545tQZ3rvp6UMg7UDhTMxTTdVdeVjY",
  authDomain: "url-shortener-d31b9.firebaseapp.com",
  projectId: "url-shortener-d31b9",
  storageBucket: "url-shortener-d31b9.appspot.com",
  messagingSenderId: "386827219859",
  appId: "1:386827219859:web:006a67b5af0a2989bbee66",
  measurementId: "G-3LPCJNFEYH"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();