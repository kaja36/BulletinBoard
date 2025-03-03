import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import NewThread from "../threads/new";
import Posts from "../threads/posts";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/threads/new" element={<NewThread />} />
        <Route path="/threads/:thread_id" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
