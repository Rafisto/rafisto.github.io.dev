import { useEffect, useState } from "react"

type Article = {
  id: string
  title: string
}

const ArticleListGenerator = () => {
  const [poems, setPoems] = useState([])
  const [display, setDisplay] = useState([])

  useEffect(() => {
    const getPoems = async () => {
      const serverData = await fetchPoems()
      setPoems(serverData)
      setDisplay(serverData)
    }
    getPoems()
  }, [])

  const fetchPoems = async () => {
    const res = await fetch('https://raw.githubusercontent.com/Rafisto/postsdata/main/poems/__list__.json')
    const json = await res.json()
    return json
  }

  const searchArticle = (e: any) => {
    const query = e.target.value;
    const temp: [] = []
    for (let index = 0; index < poems.length; index++) {
      if ((poems[index] as Article).title.toLowerCase().includes(query.toLowerCase()) || query.toLowerCase().includes((poems[index] as Article).id)) {
        temp.push(poems[index])
      }
    }
    setDisplay(temp)
  }

  return (
    <div>ArticleListGenerator</div>
  )
}

export default ArticleListGenerator