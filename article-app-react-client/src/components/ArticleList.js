import Article from "./Article";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ArticleList() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async function () {
    var response = await axios.get("http://localhost:3000/articles", {
      headers: { Accept: "application/json" },
    });
    // console.log(response.data);
    setArticleList(response.data);
  };

  return (
    <div>
      <h2 data-testid="title">All Articles</h2>
      <Link to="/new">New article</Link>
      <ul>
        {articleList.map((article, index) => {
          return (
            <li key={index} className="article">
              <Article
                title={article.title}
                body={article.body}
                published={article.published}
                id={article.id}
              />
              <Link to={"articles/" + String(article.id)}>Show article</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticleList;
