import React from 'react';
import { Link } from 'react-router-dom';
import '../static/css/Navbar.css';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="navbar">
        <p className="navbarname">.:! Rafał Włodarczyk</p>
        <Link to="/list">
            <p className="navbarname"><em>&gt;</em> Wiersze</p>
        </Link>
    </div>
  )
}

export default Navbar