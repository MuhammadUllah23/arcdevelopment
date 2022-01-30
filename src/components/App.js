import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './ui/Theme'
import Header from './ui/header';

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={() => <div>Home</div>}/>
          <Route path="/services" element={() => <div>services</div>}/>
          <Route path="/customsoftware" element={() => <div>customsoftware</div>}/>
          <Route path="/mobileapps" element={() => <div>mobileapps</div>}/>
          <Route path="/websites" element={() => <div>websites</div>}/>
          <Route path="/revolution" element={() => <div>revolution</div>}/>
          <Route path="/about" element={() => <div>about</div>}/>
          <Route path="/contact" element={() => <div>contact</div>}/>
          <Route path="/estimate" element={() => <div>estimate</div>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
      
    
  );
}

export default App;
