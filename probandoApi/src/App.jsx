import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <NavBar></NavBar>
    </ChakraProvider>
  );
}

export default App;
