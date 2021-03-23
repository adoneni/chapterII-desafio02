import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {Routes} from './routes';

import GlobalStyle from './styles/global';

export function App(){
  return (
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>)
};
