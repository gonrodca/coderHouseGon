import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { MainRouter } from "./router/MainRouter";

function App() {
  return (
    <>
      <ChakraProvider>
        <MainRouter></MainRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
