import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function App() {
  const mui_flexbox = {
    marginBlock:'25px', 
    marginInline:'auto',
    width: '100%',
    maxWidth: 500,
    textAlign:'center',
    display:'flex',
    flexDirection:"column"
  }
  const mui_button = {
    marginBlock: '25px'
  }
  return (
    <div>
      <Navbar/>
      <Box sx={[mui_flexbox, {marginBlock: '75px'}]}>
        <Header title="Strona Główna"/>
        <Typography variant="body1">
        Dzień dobry, Specjalnie dla tych, 
        którzy wyrażą chęć czytania mojej twórczości,
        prezentuję stronę internetową, dzięki której
        w prosty sposób można przeglądać moje wiersze.
        Życzę miłego czytania!
        </Typography>
        <Link to="/list">
          <Button sx={mui_button} variant="outlined">Lista wierszy</Button>
        </Link>
      </Box>
    </div>
  );
}

export default App;
