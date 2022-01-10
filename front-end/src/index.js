import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const timer = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

setInterval(timer, 1000);
