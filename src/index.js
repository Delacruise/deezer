import ReactDOM from "react-dom"
import React from 'react';
import App from './App';

//styling
import './assets/sass/coreStyles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
)
