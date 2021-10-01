// Core
import React, { useState, useEffect } from "react";

// Context
import { ThemeProvider, ThemeContext } from "./context/theme";

// Components
import { Searchbar } from "./components/Searchbar";
// import { ImageGallery } from "./components/ImageGallery";
// import { SelectCategory } from "./components/SelectCategory";
// import { Button } from "./common/Button";
// import { Pagination } from "./common/Pagination";
import { Layout } from "./common/Layout";

function App() {
  const [state, setstate] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any", { method: "GET" })
      .then((response) => response.json())
      .then((r) => setData(r));
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        {data && data.joke && data.joke}
        <h1
          style={{ textAlign: "center", fontSize: 34 }}
          onClick={() => setstate(state + 1)}
        >
          🙋 Hi There{" "}
        </h1>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
