import { ChakraProvider, Spinner, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getAllProducts } from "./services/products";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Layout } from "./components/Layout/Layout";

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
      \{" "}
      <Layout>
        {loading ? (
          <Flex
            width={"100%"}
            height={"90vh"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Spinner size="xl" />
          </Flex>
        ) : (
          <ItemListContainer products={dataProducts} />
        )}
      </Layout>
    </ChakraProvider>
  );
}

export default App;
