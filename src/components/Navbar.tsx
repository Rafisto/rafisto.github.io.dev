import React from 'react';
import { Link } from 'react-router-dom';
import '../static/css/Navbar.css';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="navbar">
        <a className="navbarlink" href="https://github.com/Rafisto">
            <p className="navbarname">.rafalwlodarczyk</p>
        </a>
        <Link className="navbarlink" to="/">
            <p className="navbarname">Strona Główna</p>
        </Link>
        <Link className="navbarlink" to="/list">
            <p className="navbarname">Wiersze</p>
        </Link>
    </div>
  )
}

export default Navbar