function Article(props) {
  return (
    <div className="article-div">
      <h3 data-testid="title">{props.title}</h3>
      <p data-testid="body">{props.body}</p>
      <p data-testid="published">
        <span className="published-bold">Published: </span>
        {props.published ? "true" : "false"}
      </p>
    </div>
  );
}

export default Article;
