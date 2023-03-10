import articleStyles from "../styles/articles.module.css";
import ArticleItem from "./ArticleItem";

const ArticlesList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map( a => 
      <ArticleItem article={a}/>
      )}
    </div>
  )
}

export default ArticlesList
