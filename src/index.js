import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'antd/dist/antd.css';
import './reset_style/index.scss'
ReactDOM.render(

  <App />
  ,
  document.getElementById('root')
);
serviceWorker.unregister();
