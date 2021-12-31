import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Toggler from "../components/atoms/Toggler";
import Logo from "../components/atoms/logo";
import Navbar from "../components/molecules/Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import { themes } from "../theme/themes";
import GlobalStyle from "../theme/globalTheme";

const Root = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={themes[theme]}>
        <Toggler theme={theme} setTheme={setTheme} />
        <Logo />
        <Navbar />
      </ThemeProvider>
    </Router>
  );
};

export default Root;
