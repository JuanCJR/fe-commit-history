import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

import { AppRoutes } from "./pages/routes/AppRoutes";
import { Layaout } from "./components/Layaout";

export const App = () => (
  <ChakraProvider theme={theme}>
    <main>
      <Layaout>
        <Routes>
          {AppRoutes.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Routes>
      </Layaout>
    </main>
  </ChakraProvider>
);
