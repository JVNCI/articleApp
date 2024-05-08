function Article(props) {
  return (
    <div>
      <h3 data-testid="title">{props.title}</h3>
      <p data-testid="body">{props.body}</p>
      <p data-testid="published">{props.published ? "true" : "false"}</p>
      <p data-testid="id">{props.id}</p>
    </div>
  );
}

export default Article;
