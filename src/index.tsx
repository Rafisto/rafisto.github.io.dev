import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Poem from './pages/Poem';
import ListPage from './pages/ListPage';
import { HashRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter basename={`/${process.env.PUBLIC_URL}`}>
    <div>
      <Routes>
        <Route path = '/' element={<App/>}/>
        <Route path = '/list' element={<ListPage/>}/>
        <Route path = '/poems/:url' element={<Poem/>}/>
      </Routes>
    </div>
  </HashRouter>
);