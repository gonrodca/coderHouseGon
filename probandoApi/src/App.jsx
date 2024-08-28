// 1. import `ChakraProvider` component
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { useState, useEffect } from "react";
import { getAllProducts } from "./services/products";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  const [dataProducts, setDataProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllProducts()
      .then((resp) => setDataProducts(resp.products))
      .catch(console.log)
      .finally(setLoading(false));
  }, []);

  return (
    <ChakraProvider>
      <NavBar></NavBar>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <ItemListContainer products={dataProducts}></ItemListContainer>
      )}
      <ItemListContainer products={dataProducts}></ItemListContainer>
    </ChakraProvider>
  );
}

export default App;
