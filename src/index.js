import "@fontsource/raleway/800.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { store } from "./frontend/store";
import { theme } from "./frontend/themes";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
