import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// Import necessary packages
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faAddressCard, faDroplet, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add the imported icons to the library
library.add(faCaretDown);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
