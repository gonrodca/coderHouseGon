import { ChakraProvider, Spinner, Flex } from "@chakra-ui/react";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Layout } from "./Layout/Layout";
import { useProducts } from "./hooks";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  const { dataProducts, loading } = useProducts();
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
