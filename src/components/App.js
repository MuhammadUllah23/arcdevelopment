import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './ui/Theme'
import Header from './ui/header';

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </ThemeProvider>
      
    
  );
}

export default App;
