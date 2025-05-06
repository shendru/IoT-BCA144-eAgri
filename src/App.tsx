import { Routes, Route, useLocation } from "react-router-dom";
import Aside from "./components/aside/Aside02";
import Dashboard from "./components/dashboard/Dashboard02";
import Inventory from "./components/inventory/Inventory";
import LoginForm from "./components/login/Login";

function App() {
  const location = useLocation();
  const hideAside = location.pathname === "/";

  return (
    <div className={`${!hideAside && "flex h-full"}`}>
      {!hideAside && <Aside />}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </div>
  );
}

export default App;
