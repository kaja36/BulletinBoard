import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import NewThread from "../threads/new";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/threads/new" element={<NewThread />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
