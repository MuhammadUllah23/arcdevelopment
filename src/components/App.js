import React from 'react';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Header from './ui/header';

function App() {
  return (
    <ThemeProvider > 
      <Header />
      Hello
    </ThemeProvider>
      
    
  );
}

export default App;
