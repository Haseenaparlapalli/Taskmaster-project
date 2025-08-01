import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateTask from "./pages/CreateTask";
import Home from "./pages/Home"; // ✅ Import
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} /> {/* ✅ Home page */}
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/create-task" element={<CreateTask />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
