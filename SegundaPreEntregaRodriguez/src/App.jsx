import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <ChakraProvider>
      <NavBar></NavBar>
    </ChakraProvider>
  );
}

export default App;
