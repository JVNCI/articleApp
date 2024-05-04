import ArticleList from "./components/ArticleList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import New from "./views/New";
import SingleArticle from "./views/SingleArticle";
import Edit from "./views/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/new" element={<New />} />
        <Route path="/articles/:articleId" element={<SingleArticle />} />
        <Route path="/articles/:articleId/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
