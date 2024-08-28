// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { useState, useEffect } from "react";
import { getAllProducts } from "./services/products";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((resp) => setDataProducts(resp.products))
      .catch(console.log);
  }, []);

  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <ItemListContainer products={dataProducts}></ItemListContainer>
    </ChakraProvider>
  );
}

export default App;
