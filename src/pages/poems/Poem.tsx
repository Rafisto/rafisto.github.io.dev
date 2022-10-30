import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import '../../static/css/Poem.css'

const basePoem = {
  id: '1',
  url: 'poem',
  title: 'Poemat',
  date: 'Autor',
  description: 'Poemat',
  content: ['Trwa ładowanie...']
}

const notFoundPoem = {
  id: '-1',
  url: 'undefined',
  date: '',
  description: '404 - Wiersza nie znaleziono',
  content: ['Wiersz o podanym adresie','404 - Nie istnieje']
}

const Poem = () => {
  let { url } = useParams();
  const [title, setTitle] = useState(basePoem.title)
  const [date,setDate] = useState(basePoem.date)
  const [text,setText] = useState(basePoem.content)

  useEffect(()=>{
    const fetchPoems = async () =>{
      const res = await fetch('https://raw.githubusercontent.com/Rafisto/postsdata/main/poems/json/'+url+'.json')
      if(res.status === 404){
        const json = notFoundPoem;
        return json
      }
      const json = await res.json()
      return json
    }
    const getContent = async () => {
      let serverData = await fetchPoems()
      let poem = (serverData as {[key: string]: any})
      setTitle(poem['title'])
      setDate(poem['date'])
      setText(poem['content'])
    }
    getContent()
  }, [url])
  
  return(
    <div>
    <Navbar/>
    <Box sx={[{overflowX:"hidden",marginBlockStart: '100px',alignItems:"center"}]}>
    <div className="poemparent">
      <div style={{paddingInline:"10px"}} className="poemcontent">
        <Typography className="poemtitle" style={{fontSize:'100%'}}>{title}</Typography>
        <Typography className="poemdate" style={{fontSize:'100%'}}>{date}</Typography>
        {text.map((line:string,index:number)=>{
          var text= "";
          if ((index+1) % 5 === 0) {
              text = " "+String(index+1)+" ";
          } 
          else {
              text = " ";
          }
          return(
              <div key={index} >
              <Typography style={{fontSize:'80%'}} key={index} className="poemline"><span className="poemindex">{text}</span>{line}</Typography>  
              </div>
          )
        })}
      </div>
    </div>
    <Footer href="/list" message="Powrót do listy"/>
    </Box>
    </div>
  )
}

export default Poem