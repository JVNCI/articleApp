import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./views/SingleArticle";
import New from "./views/New";
import Edit from "./views/Edit";

test("renders ArticleList component correctly", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <ArticleList />
    </MemoryRouter>
  );

  const title = getByTestId("title");
  expect(title).toBeInTheDocument();
  expect(title.textContent).toBe("All Articles");
});

test("renders Article component correctly", () => {
  const { getByTestId } = render(
    <Article title="test title" body="test body" published={false} />
  );
  const title = getByTestId("title");
  const body = getByTestId("body");
  const published = getByTestId("published");

  expect(title.textContent).toBe("test title");
  expect(body.textContent).toBe("test body");
  expect(published.textContent).toBe("false");
});

test("renders SingleArticle view correctly", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <SingleArticle />
    </MemoryRouter>
  );

  const title = getByTestId("single title");
  expect(title).toBeInTheDocument();
  expect(title.textContent).toBe("Single Article");
});

test("renders New view correctly", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <New />
    </MemoryRouter>
  );

  const title = getByTestId("new title");
  expect(title).toBeInTheDocument();
  expect(title.textContent).toBe("New Article");
});

test("renders Edit view correctly", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Edit />
    </MemoryRouter>
  );

  const title = getByTestId("edit title");
  expect(title).toBeInTheDocument();
  expect(title.textContent).toBe("Edit Article");
});

test("should not add article without a title or body", async () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <New />
    </MemoryRouter>
  );

  const addArticleBtn = getByTestId("addArticle");
  fireEvent.click(addArticleBtn);
  const errorMsg = await screen.findByText("title and body required");
  expect(errorMsg).toBeInTheDocument();
});
