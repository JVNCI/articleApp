import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function New() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [published, setPublished] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

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

  async function addArticle(e) {
    e.preventDefault();
    var url = "http://localhost:3000/articles";

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
      .post(url, data, config)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status == 422) {
          setError("title and body required");
        } else {
          setError("something went wrong :(");
        }
      });
  }

  return (
    <div>
      <h3 data-testid="error">{error}</h3>
      <h3 data-testid="new title">New Article</h3>
      <label htmlFor="title">Title:</label>
      <input
        name="title"
        value={title}
        onChange={handleTitle}
        data-testid="title"
      ></input>
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
      <button onClick={addArticle} data-testid="addArticle">
        Add article
      </button>
      <br />
      <Link to={"/"}>Back to articles</Link>
    </div>
  );
}

export default New;
