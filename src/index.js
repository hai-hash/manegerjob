import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ManageJob from './Components/ManageJob';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ManageJob />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
