import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../static/css/Poem.css'

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
    const getContent = async () => {
      let serverData = await fetchPoems()
      let poem = (serverData as {[key: string]: any})
      setTitle(poem['title'])
      setDate(poem['date'])
      setText(poem['content'])
    }
    getContent()
  })
  const fetchPoems = async () =>{
    const res = await fetch('https://raw.githubusercontent.com/Rafisto/postsdata/main/poems/json/'+url+'.json')
    if(res.status === 404){
      const json = notFoundPoem;
      return json
    }
    const json = await res.json()
    return json
  }
  
  return(
    <div>
    <Header title="Wiersz"/>
    <div className="poemparent">
      <div className="poemcontent">
        <h1 className="poemtitle">{title}</h1>
        <h2 className="poemdateauthor">{date}</h2>
        <h3 className="poemdateauthor">Rafał Włodarczyk</h3>
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
              <p key={index} className="poemline"><span className="poemindex">{text}</span>{line}</p>  
              </div>         
          )
        })}
      </div>
    </div>
    <Footer href="/list" message="Powrót do listy"/>
    </div>
  )
}

export default Poem