import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import PoemListing from '../../components/PoemListing';
import Navbar from '../../components/Navbar';
import '../../static/css/PoemListing.css';
import { Box, TextField, Typography } from '@mui/material';

type Props = {}

type Poem = {
  url: string,
  id: string,
  title: string 
}

const ListPage = (props: Props) => {
  const [poems, setPoems] = useState([])
  const [display, setDisplay] = useState([])

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

  return (
    <div>
    <Navbar/>
    <Box sx={[{marginBlockStart: '100px'}]}>
    <div className="listpagemain" style={{}}>
    <Typography variant="h4" style={{marginBlockEnd:"15px"}}>Lista Wierszy</Typography>
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
        onChange={(e)=>{searchPoem(e)}}
      />
      {
      display.sort().map((poem)=>
      <div key={poem["id"]} className="__poemrecord" id={poem["title"]}>
        <PoemListing record={poem}/>
      </div>
      )
      }
    </div>
    <Footer href="/" message="Powrót do strony głównej"/>
    </div>
    </Box>
    </div>
  )
}

export default ListPage