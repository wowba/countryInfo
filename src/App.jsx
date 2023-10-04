import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";

import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Main} />
      </Routes>
    </>
  );
}

export default App;
