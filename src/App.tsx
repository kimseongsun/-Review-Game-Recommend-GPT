import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./Mainpage";
import LoginPage from "./LoginPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
