// Core
import React, { useState, useEffect } from "react";

// Context
import { ThemeProvider } from "./context/theme";

// Components
import { Searchbar } from "./components/Searchbar";
import { ImageGallery } from "./components/ImageGallery";
// import { SelectCategory } from "./components/SelectCategory";
// import { Button } from "./common/Button";
import { Pagination } from "./common/Pagination";
import { Layout } from "./common/Layout";
import { useFetch } from "./hook/useFetch";
import { Modal } from "./common/Modal";

function App() {

  // Example with Custom Hook
  const { data, loader, _fetchWithParams } = useFetch();

  const [selected, setSlected] = useState(""); // imaga data on select
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [queryValue, setQueryValue] = useState("");
  const [page, setPage] = useState(1);

  const onSelectImgae = (params) => {
    setSlected(params);
    setIsModalOpen(true);
  };

  const closeModel = () => setIsModalOpen(false);

  const onSendQuery = (property) => {
    setQueryValue(property);
  };

  useEffect(() => {
    if (page && queryValue) {
      _fetchWithParams(queryValue, page);
    }
  }, [page, queryValue, _fetchWithParams]);

  const onChangePage = (preperty) => setPage(preperty);
  
  return (
    <ThemeProvider>
      <Layout>
        {selected.length > 0 && <>Modal</>}
        <Searchbar onSendQuery={onSendQuery} />

        {!loader && data && (
          <ImageGallery response={data} onSelectImgae={onSelectImgae} />
        )}
        <Pagination
          pages={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          onChangePage={onChangePage}
        />

        {loader && <h1>Loading .. </h1>}
        {isModalOpen && (
          <Modal closeModal={closeModel}>
            <img width="350" src={selected} alt="" />
          </Modal>
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
