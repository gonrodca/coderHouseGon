import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <ChakraProvider>
        <NavBar></NavBar>
        <Home></Home>
      </ChakraProvider>
    </>
  );
}

export default App;
