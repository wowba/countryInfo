import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Main } from "./pages/Main";
import { Detail } from "./pages/Detail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="*" Component={Detail}></Route>
      </Routes>
    </>
  );
}

export default App;
