import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './ui/Theme'
import Header from './ui/Header';
import Footer from './ui/Footer';


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0) 

  return (
    <ThemeProvider theme={theme}> 
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Routes>
          <Route path="/" element={<div style={{height: "300px"}}>Home</div>}/>
          <Route path="/services" element={<div style={{height: "300px"}}>services</div>}/>
          <Route path="/customsoftware" element={<div style={{height: "300px"}}>customsoftware</div>}/>
          <Route path="/mobileapps" element={<div style={{height: "300px"}}>mobileapps</div>}/>
          <Route path="/websites" element={<div style={{height: "300px"}}>websites</div>}/>
          <Route path="/revolution" element={<div style={{height: "300px"}}>revolution</div>}/>
          <Route path="/about" element={<div style={{height: "300px"}}>about</div>}/>
          <Route path="/contact" element={<div style={{height: "300px"}}>contact</div>}/>
          <Route path="/estimate" element={<div style={{height: "300px"}}>estimate </div>}/>
        </Routes>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>   
  );
}

export default App;
