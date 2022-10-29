import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PoemListing from '../../components/PoemListing';
import Navbar from '../../components/Navbar';
import '../../static/css/PoemListing.css';
import { Box, TextField } from '@mui/material';

type Props = {}

type Poem = {
  url: string,
  id: string,
  title: string 
}

const ListPage = (props: Props) => {
  const [poems, setPoems] = useState([])
  const [display, setDisplay] = useState([])
  // const [loaded, setLoaded] = useState(false)

  useEffect(()=>{
    const getPoems = async () => {
      const serverData = await fetchPoems()
      setPoems(serverData)
      setDisplay(serverData)
      // setLoaded(true)
    }
    getPoems()
  },[])

  const fetchPoems = async () =>{
    const res = await fetch('https://raw.githubusercontent.com/Rafisto/postsdata/main/poems/__list__.json')
    const json = await res.json()
    return json
  } 
  
  const searchPoem = (e: any) =>{
    // const query = (document.getElementById("__poemsearch") as HTMLInputElement)!.value;
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
    <Box sx={[{marginBlock: '75px'}]}>
    <div className="listpagemain">
    <Header title="Lista Wierszy"/>
    <hr className="hrfourth"/>
    <div>
    <TextField
      id="__poemsearch"
      label="Wyszukaj wiersz"
      type="search"
      variant="filled"
      onChange={(e)=>{searchPoem(e)}}
    />
    </div>
    <div className="recordcontainerparent">
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