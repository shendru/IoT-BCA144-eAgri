// import NavBar from "./components/navbar/NavBar";
import Aside from "./components/aside/Aside02";
import Dashboard from "./components/dashboard/Dashboard02";
import Inventory from "./components/inventory/Inventory";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   BrowserRouter,
// } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  // const router = createBrowserRouter([
  //   { path: "/dashboard", element: <Dashboard /> },
  //   { path: "/inventory", element: <Inventory /> },
  // ]);

  return (
    <div className="flex h-full">
      <Aside />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </div>
  );
}

export default App;
