import React from 'react'
import { Link } from 'react-router-dom';
import '../../static/css/PoemListing.css';

import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Box, Button, Typography } from '@mui/material';

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
    <div className="poemlisting" key={props.record.id ? props.record.id: "ID does not exist"}>
      <Box sx={{backgroundColor:"grey.900",padding:"5px",marginBlock:"10px",borderRadius:"7px",boxShadow:"1px 1px 0px 1px grey"}}>
        <div style={{display: 'inline-flex',verticalAlign:"middle",alignItems: 'center',flexWrap: 'wrap'}}>
        <HistoryEduIcon color="primary"/>
        <Typography color="primary" variant="h6">&nbsp;{props.record.title ? props.record.title : "Tytuł niedostępny"}</Typography>
        </div>
        <Typography className="recordid">{props.record.id ? props.record.id : "Tytuł niedostępny"}</Typography>
        <p className="recorddate"  style={{marginBlockEnd:"8px"}} >{props.record.date ? props.record.date : "Data niedostępna"}</p>
        <p className="recorddescription" style={{marginInline:"20px"}}>{props.record.description ? props.record.description : "Opis niedostępny"}</p>
        <Link to={props.record.url ? "/poems/"+ props.record.url : "none"}>
        <Button style={{margin:"5px"}} variant="outlined">{props.record.title}</Button>
        </Link>
      </Box>
    </div>
  )
}

export default PoemListing;