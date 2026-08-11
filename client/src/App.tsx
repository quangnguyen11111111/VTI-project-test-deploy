import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import DashBoard from "./pages/DashBoard";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
      <Route index element={<Home />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

    </Routes>
  );
}

export default App;