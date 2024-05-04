function Article(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <p>{props.published ? "true" : "false"}</p>
      <p>{props.id}</p>
    </div>
  );
}

export default Article;
