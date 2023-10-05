import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";

import { Header } from "./components/Header";
import { Main } from "./pages/Main";
import { Detail } from "./pages/Detail";
import themeState from "./atom/themeState";

function App() {

  const themeValue = useRecoilValue(themeState)

  const lightMode = {
    borderColor: `hsl(0, 0%, 90%)`,
    textColor: `hsl(200, 15%, 8%)`,
    backgroundColor: `hsl(0, 0%, 98%)`,
    elementColor: `hsl(0, 0%, 100%)`
  }
  
  const darkMode = {
    borderColor: `hsl(207, 26%, 12%)`,
    textColor: `hsl(0, 0%, 100%)`,
    backgroundColor: `hsl(207, 26%, 17%)`,
    elementColor: `hsl(209, 23%, 22%)`
  }
  
  const mode = themeValue ? lightMode : darkMode
  
  const theme = {
    mode
  }

  return (
    <ThemeProvider theme={theme}>          
      <Header />
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="*" Component={Detail}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
