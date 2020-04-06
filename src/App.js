import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import "./styles/main.sass";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  </>
);

export default App;
