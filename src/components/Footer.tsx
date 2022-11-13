import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import '../static/css/Footer.css';

type Props = {
    href: string;
    message: string;
}

const Footer = (props: Props) => {
  return (
    <div style={{textAlign:"center"}}>
        <hr className="hrfooter"/>
        <Link to={props.href}>
          <Button style={{margin:"5px"}} variant="outlined">{props.message}</Button>
        </Link>
        <hr className="hrdownfooter"/>
        <p><i>Projekty RW 2022</i></p>
    </div>
  )
}

export default Footer