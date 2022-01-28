import React from 'react';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './ui/Theme'
import Header from './ui/header';

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Header />
      Hello
    </ThemeProvider>
      
    
  );
}

export default App;
