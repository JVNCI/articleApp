import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Edit() {
  const { articleId } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [published, setPublished] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState("");

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
        console.log(res.data);
        setTitle(res.data.title);
        setBody(res.data.body);
        setPublished(res.data.published);
        setId(res.data.id);
      })
      .catch((err) => setError(err));
  };

  async function editArticle() {
    var url = `http://localhost:3000/articles/${articleId}`;

    var data = {
      title: title,
      body: body,
      published: published,
    };

    var config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    await axios
      .put(url, data, config)
      .then(() => {
        navigate("/");
      })
      .catch((err) => setError(err));
  }

  function handleTitle(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  function handleBody(e) {
    e.preventDefault();
    setBody(e.target.value);
  }

  function handlePublished(e) {
    e.preventDefault();
    setPublished(e.target.value);
  }

  return (
    <div>
      <p>{articleId}</p>
      <label htmlFor="title">Title:</label>
      <input name="title" value={title} onChange={handleTitle}></input>
      <br />
      <label htmlFor="body">Body:</label>
      <input name="body" type="text" value={body} onChange={handleBody}></input>
      <br />
      <label htmlFor="published">Published:</label>
      <input
        type="checkbox"
        name="published"
        onChange={handlePublished}
      ></input>
      <br />
      <button onClick={editArticle}>Edit article</button>
      <br />
      <Link to={"/articles/" + String(articleId)}>Show article</Link>
      <br />
      <Link to={"/"}>Back to articles</Link>
    </div>
  );
}

export default Edit;
