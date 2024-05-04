import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Article from "../components/Article";

function SingleArticle() {
  const { articleId } = useParams();
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [published, setPublished] = useState(false);
  const [id, setId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getArticle();
  }, [articleId]);

  const getArticle = async () => {
    await axios
      .get(`http://localhost:3000/articles/${articleId}`, {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        setTitle(res.data.title);
        setBody(res.data.body);
        setPublished(res.data.published);
        setId(res.data.id);
      })
      .catch((err) => setError(err));
  };

  async function deleteArticle() {
    await axios
      .delete(`http://localhost:3000/articles/${articleId}`, {
        headers: { Accept: "application/json" },
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => setError(err));
  }

  return (
    <div>
      <Article title={title} body={body} published={published} id={id} />
      <br />
      <button onClick={deleteArticle}>Delete article</button>
      <br />
      <Link to={"edit"}>Edit article</Link>
      <br />
      <Link to={"/"}>Back to articles</Link>
    </div>
  );
}

export default SingleArticle;
