import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import App from './pages/App';
import Poem from './pages/poems/Poem';
import ListPage from './pages/poems/ListPage';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff7043',
    },
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={darkTheme}>
  <CssBaseline />
  <HashRouter basename={`/${process.env.PUBLIC_URL}`}>
    <div>
      <Routes>
        <Route path = '/' element={<App/>}/>
        <Route path = '/list' element={<ListPage/>}/>
        <Route path = '/poems/:url' element={<Poem/>}/>
      </Routes>
    </div>
  </HashRouter>
  </ThemeProvider>
);