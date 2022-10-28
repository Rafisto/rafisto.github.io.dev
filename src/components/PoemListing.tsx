import React from 'react'
import { Link } from 'react-router-dom';
import '../static/css/PoemListing.css';

type Props = {
  record: {
    url:string,
    id:string,
    date:string,
    title:string,
    description:string
  }
}

const PoemListing = (props : Props) => {
  return (
    <div className="poemlisting recordcontainer" key={props.record.id ? props.record.id: "ID does not exist"}>
        <Link to={props.record.url ? "/poems/"+ props.record.url : "none"}>
        <p className="recordid">{props.record.id ? props.record.id : "Tytuł niedostępny"}</p>
        <p className="recordtitle">{props.record.title ? props.record.title : "Tytuł niedostępny"}</p>
        <p className="recorddate">{props.record.date ? props.record.date : "Data niedostępna"}</p>
        </Link>
        <p className="recorddescription">{props.record.description ? props.record.description : "Opis niedostępny"}</p>
    </div>
  )
}

export default PoemListing;