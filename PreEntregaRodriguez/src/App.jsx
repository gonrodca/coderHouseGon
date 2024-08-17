import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <ChakraProvider>
        <NavBar></NavBar>
        <ItemListContainer
          greeting={"Bienvenidos a mi sitio web"}
        ></ItemListContainer>
      </ChakraProvider>
    </>
  );
}

export default App;
