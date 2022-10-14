import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Auth, Navigation } from "@pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="home" element={<Home />} />
        <Route path="auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
