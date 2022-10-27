import React from 'react'
import { Link } from 'react-router-dom';
import '../static/css/Footer.css';

type Props = {
    href: string;
    message: string;
}

const Footer = (props: Props) => {
  return (
    <div>
        <hr className="hrfooter"/>
        <Link to={props.href}>
            <p>{props.message}</p>
        </Link>
        <hr className="hrdownfooter"/>
        <p>Projekt <i>"Wiersze 2022"</i></p>
    </div>
  )
}

export default Footer