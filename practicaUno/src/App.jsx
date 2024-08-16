import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { Button, Text, Flex } from "@chakra-ui/react";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
ItemListContainer;
//import ItemListContainer from "./components/ItemListContainer/";
function App() {
  const [count, setCount] = useState(0);

  const handleRemoveItem = () => {
    setCount(count - 1);
  };

  const handleAddItem = () => {
    setCount(count + 1);
  };

  console.log(count);
  return (
    <ChakraProvider>
      <Navbar></Navbar>
      <Flex>
        <Button onClick={handleAddItem}>+</Button>
        <Text>{count}</Text>
        <Button onClick={handleRemoveItem}>-</Button>
      </Flex>

      <Flex flexDirection={"column"} alignItems={"center"}>
        <ItemListContainer label="Bienvenidos a mi pagina"></ItemListContainer>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
