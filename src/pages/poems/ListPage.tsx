import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import PoemListing from '../../components/PoemListing';
import Navbar from '../../components/Navbar';
import '../../static/css/PoemListing.css';
import { Box, Button, FormControlLabel, FormGroup, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {}

type Poem = {
  url: string,
  id: string,
  title: string 
}

const ListPage = (props: Props) => {
  const [poems, setPoems] = useState([])
  const [display, setDisplay] = useState([])
  const [listView, setListView] = useState(false)

  useEffect(()=>{
    const getPoems = async () => {
      const serverData = await fetchPoems()
      setPoems(serverData)
      setDisplay(serverData)
    }
    getPoems()
  },[])

  const fetchPoems = async () =>{
    const res = await fetch('https://raw.githubusercontent.com/Rafisto/postsdata/main/poems/__list__.json')
    const json = await res.json()
    return json
  } 
  
  const searchPoem = (e: any) =>{
    const query = e.target.value;
    const temp: [] = []
    for (let index = 0; index < poems.length; index++) {
      if ((poems[index] as Poem).title.toLowerCase().includes(query.toLowerCase()) || query.toLowerCase().includes((poems[index] as Poem).id))
      {
        temp.push(poems[index])
      }
    } 
    setDisplay(temp)
  } 

  const switchListView = () => {
    setListView(!listView);
  }

  return (
    <div>
    <Navbar/>
    <Box sx={[{marginBlockStart: '100px',alignItems:"center"}]}>
    <div className="listpagemain" style={{}}>
    <Typography variant="h4" style={{marginBlockEnd:"15px"}}>Lista Wierszy</Typography>
    <FormGroup sx={{alignItems:"center"}}>
    <FormControlLabel onClick={switchListView} control={<Switch/>} label="Widok Listy" />
    </FormGroup>
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
        onChange={(e)=>{searchPoem(e)}}></TextField>
        {(() => {
        if (listView === false) {
          return (
            display.sort().map((poem)=>
            <div key={poem["id"]} className="__poemrecord" id={poem["title"]}>
              <PoemListing record={poem}/>
            </div>
            )
          )
        }
        else {
          return (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                  <TableCell>Lp.</TableCell>
                  <TableCell>Tytuł</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Opis</TableCell>
                  <TableCell>Czytaj Online</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {display.sort().map((poem) => (
                <TableRow
                  key={poem["id"]}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{poem["id"]}</TableCell>
                  <TableCell>{poem["title"]}</TableCell>
                  <TableCell>{poem["date"]}</TableCell>
                  <TableCell>{poem["description"]}</TableCell>
                  <TableCell>
                    <Link to={poem["url"] ? "/poems/"+ poem["url"] : "none"}>
                      <Button style={{margin:"5px"}} variant="outlined">{poem["title"]}</Button>
                    </Link>
                  </TableCell>
                </TableRow>
                ))}
                </TableBody>
              </Table>
            </TableContainer>
          )
        }
      })()}
    </div>
    <Footer href="/" message="Powrót do strony głównej"/>
    </div>
    </Box>
    </div>
  ) 
}

export default ListPage