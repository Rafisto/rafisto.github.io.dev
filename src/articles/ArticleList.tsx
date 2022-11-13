import Navbar from '../components/Navbar'
import ArticleListGenerator from './components/ArticleListGenerator'
import ArticleWrapper from './components/ArticleListWrapper'

const ArticleList = () => {
  return (
    <div>
        <Navbar/>
        <ArticleWrapper>
        <ArticleListGenerator/>
        </ArticleWrapper>
    </div>
  )
}

export default ArticleList