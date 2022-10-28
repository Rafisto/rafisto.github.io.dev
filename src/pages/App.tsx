import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../static/css/App.css';
import '../static/css/PoemListing.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Header title="Strona Główna"/>
      <p className="titlemsg">Dzień dobry, Specjalnie dla tych, którzy wyrażą chęć czytania mojej twórczości, prezentuję stronę internetową, dzięki której w prosty sposób można przeglądać moje wiersze. Życzę miłego czytania!</p>
      <Link to="/list">
        <p>Lista wierszy</p>
      </Link>
    </div>
  );
}

export default App;
