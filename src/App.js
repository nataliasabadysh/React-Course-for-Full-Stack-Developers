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

function App(props) {
  // Example with Custom Hook
  const { data, loader, _fetchWithParams } = useFetch();

  const [selected, setSlected] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [queryValue, setQueryValue] = useState("");
  const [page, setPage] = useState(1);

  const onSelectImage = (params) => {
    setSlected(params);
    setIsModalOpen(true);
  };

  // console.log('history', history)
  useEffect(() => {
    if (page && queryValue) {
      _fetchWithParams(queryValue, page);
    }
  }, [page, queryValue, _fetchWithParams]);

  const closeModel = () => setIsModalOpen(false);

  const onChangePage = (preperty) => setPage(preperty);
  const onSendQuery = (property) => setQueryValue(property);


  return (
    <ThemeProvider>
      <Layout>
        {selected.length > 0 && <>Modal</>}
        <Searchbar onSendQuery={onSendQuery} />

        {!loader && data && (
          <ImageGallery response={data} onSelectImage={onSelectImage} history={props.history}/>
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
