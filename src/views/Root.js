import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/organisms/Header";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";
import { themes } from "../theme/themes";
import GlobalStyle from "../theme/globalTheme";
import Home from "./Home";
import Onas from "./Onas";
import Oferta from "./Oferta";
import Kontakt from "./Kontakt";
import ContentPageTest2 from "./ContentPageTest2";

const Root = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <ThemeProvider theme={themes[theme]}>
        <ModalProvider>
          <Header theme={theme} setTheme={setTheme} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/onas" element={<Onas />} />
            <Route exact path="/oferta" element={<Oferta />} />
            <Route exact path="/kontakt" element={<Kontakt />} />
            <Route exact path="/thanks" element={<ContentPageTest2 />} />
          </Routes>
        </ModalProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
