import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./page/main/MainPage";
import FormPage from "./page/form/FormPage";
import GiftPage from "./page/gift/GiftPage";
import Header from "./system/layout/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/form"} element={<FormPage />} />
        <Route path={"/gift"} element={<GiftPage />} />
      </Routes>
    </>
  );
}

export default App;
