import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import PoemListing from '../components/PoemListing';
import '../static/css/PoemListing.css'

type Props = {}

type Poem = {
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
  
  const searchPoem = () =>{
    const query = (document.getElementById("__poemsearch") as HTMLInputElement)!.value;
    const temp: [] = []
    for (let index = 0; index < poems.length; index++) {
      if ((poems[index] as Poem).title.toLowerCase().includes(query.toLowerCase()))
      {
        temp.push(poems[index])
      }
    } 
    setDisplay(temp)
  } 

  return (
    <div className="listpagemain">
    <Header title="Lista Wierszy"/>
    <hr className="hrfourth"/>
    <input id="__poemsearch" className="poemsearch" onChange={searchPoem} type="text" placeholder="Wyszukaj po nazwie"></input>
    <div>
    {
    display.sort().map((poem)=>
    <div key={poem["id"]} className="__poemrecord" id={poem["title"]}>
      <PoemListing id={poem["id"]} poemname={poem["title"]}/>
    </div>
    )
    }
    </div>
    <Footer href="/" message="Powrót do strony głównej"/>
    </div>
  )
}

export default ListPage