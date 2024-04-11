import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./store";
import router from "./router";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
