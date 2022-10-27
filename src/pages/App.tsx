import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../static/css/App.css';

function App() {
  return (
    <div>
      <Header title="Strona Główna"/>
      <Link to="/list">
        <p>Lista wierszy</p>
      </Link>
    </div>
  );
}

export default App;
