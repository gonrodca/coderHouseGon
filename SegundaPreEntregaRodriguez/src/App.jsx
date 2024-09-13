import { ChakraProvider } from "@chakra-ui/react";
import { MainRouter } from "./router/MainRouter";
// commit
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
