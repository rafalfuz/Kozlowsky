import { useState } from "react";
import Toggler from "../components/atoms/Toggler";
import { ThemeProvider } from "styled-components";
import { themes } from "../theme/themes";
import ContentPageTest from "./ContentPageTest";
import ContentPageTest2 from "./ContentPageTest2";
import GlobalStyle from "../theme/globalTheme";

const Root = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes[theme]}>
        <Toggler theme={theme} setTheme={setTheme} />
        <ContentPageTest />
        <ContentPageTest2 />
      </ThemeProvider>
    </>
  );
};

export default Root;
