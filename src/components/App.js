import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './ui/Theme'
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import MobileApps from './MobileApps';


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0) 

  return (
    <ThemeProvider theme={theme}> 
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Routes>
          <Route path="/" element={<LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route path="/services" element={<Services setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route path="/customsoftware" element={<CustomSoftware setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route path="/mobileapps" element={<MobileApps setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route path="/websites" element={<div style={{height: "400px"}}>websites</div>}/>
          <Route path="/revolution" element={<div style={{height: "400px"}}>revolution</div>}/>
          <Route path="/about" element={<div style={{height: "400px"}}>about</div>}/>
          <Route path="/contact" element={<div style={{height: "400px"}}>contact</div>}/>
          <Route path="/estimate" element={<div style={{height: "400px"}}>estimate </div>}/>
        </Routes>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>   
  );
}

export default App;
