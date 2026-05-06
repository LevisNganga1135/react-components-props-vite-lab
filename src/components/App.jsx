import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header>
        <Header name={blogData.name} />
      </header>

      <aside>
        <About image={blogData.image} about={blogData.about} />
      </aside>

      <main>
        <ArticleList posts={blogData.posts} />
      </main>
    </div>
  );
}

export default App;
