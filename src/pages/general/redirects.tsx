import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

type Props = {}

type LinkEntry = {
    url: string,
    id: string,
    title: string,
    description: string,
    tags: string
}

const Redirects = (props: Props) => {
  const [entries, setEntries] = useState([])
  const [display, setDisplay] = useState([])

  useEffect(()=>{
    const getPoems = async () => {
      const serverData = await fetchPoems()
      setEntries(serverData)
      setDisplay(serverData)
    }
    getPoems()
  },[])

  const fetchPoems = async () =>{
    const res = await fetch('https://raw.githubusercontent.com/Rafisto/postsdata/main/general/links.json')
    const json = await res.json()
    return json
  } 
  
  const searchPoem = (e: any) =>{
    const query = e.target.value;
    const temp: [] = []
    for (let index = 0; index < entries.length; index++) {
      if ((entries[index] as LinkEntry).title.toLowerCase().includes(query.toLowerCase()) || (entries[index] as LinkEntry).tags.toLowerCase().includes(query.toLowerCase()))
      {
        temp.push(entries[index])
      }
    } 
    setDisplay(temp)
  } 


  return (
    <div>
    <Navbar/>
    <Box sx={[{marginBlockStart: '100px',alignItems:"center"}]}>
    <div className="listpagemain" style={{}}>
    <Typography variant="h4" style={{marginBlockEnd:"15px"}}>Lista Artykułów</Typography>
    <div className="recordcontainerparent">
    <TextField
    id="__poemsearch"
    label="Wyszukaj wiersz"
    type="search"
    variant="filled"
    fullWidth
    InputProps={{
        inputProps: {
            style: { textAlign: "center" },
        }
    }}
    style={{display:"inline-block"}}
    onChange={(e)=>{searchPoem(e)}}>    
    </TextField>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell>Lp.</TableCell>
            <TableCell>Nazwa</TableCell>
            <TableCell>Link</TableCell>
            <TableCell>Opis</TableCell>
            <TableCell>Tagi</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {display.sort().map((entry) => (
        <TableRow key={entry["id"]} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{entry["id"]}</TableCell>
            <TableCell>
            <Typography style={{fontFamily:"monospace",fontSize:"10pt"}}>
              {entry["title"]}
            </Typography>
            </TableCell> 
            <TableCell>
            <a href={entry["url"]} rel="noopener norefferer">
                <Button style={{margin:"5px"}} variant="outlined">Artykuł</Button>
            </a>
            </TableCell>
            <TableCell>
            <Typography style={{fontFamily:"monospace",fontSize:"8pt"}}>
              {entry["description"]}
            </Typography>
            </TableCell>
            <TableCell>
              <Box sx={{padding:"5px"}}>
              <Typography style={{fontFamily:"monospace",fontSize:"8pt"}}>
              {entry["tags"]}
              </Typography>
              </Box>
            </TableCell>
        </TableRow>
        ))}
        </TableBody>
        </Table>
    </TableContainer>
    </div>
    <Footer href="/" message="Powrót do strony głównej"/>
    </div>
    </Box>
    </div>
  ) 
}

export default Redirects