import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> // 렌더링이 2번 되는 문제가 발생할 수 있다
    <App />
  // </React.StrictMode> // 렌더링이 2번 되는 문제가 발생할 수 있다
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); // 렌더링이 2번 되는 문제가 발생할 수 있다
