require "test_helper"

class ArticleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "should not save an article without a title" do
    article = Article.new
    article.body = "article body"
    assert_not article.save, "Saved the project without a title"
  end

  test "should not save an article without a body" do
    article = Article.new
    article.title = "article title"
    assert_not article.save, "Saved the project without a body"
  end
end
