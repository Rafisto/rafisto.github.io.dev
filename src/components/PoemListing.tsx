import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    id: string;
    poemname: string;
}

const PoemListing = (props : Props) => {
  return (
    <div key={props.id ? props.id : "Brak informacji"} className="poemlisting">
        <Link to={props.id ? "/poems/"+props.id : "none"}>
        <p className="poemname">{props.poemname ? props.poemname : "Brak informacji"}</p>
        </Link>
    </div>
  )
}

export default PoemListing;