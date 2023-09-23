import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './css/App.css';
import App from './App';
// Google Analytics
import ReactGA from "react-ga4";

// Google Analytics 測定 ID を入力して設定
ReactGA.initialize("G-JV6FFSP99P");
// ページビューイベントを処理
ReactGA.send("pageview");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter basename={process.env.REACT_APP_BASENAME}> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
