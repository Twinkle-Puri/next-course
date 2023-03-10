import Link from "next/link";
import articleStyle from "../styles/Articles.module.css";
const ArticleItem = ({ article }) => {
  return (
    <Link href="/articles/[id]" as={`/article/${article.id}`}>
      <a className={articleStyle.card}>
        <h3>{article.title} &arr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
