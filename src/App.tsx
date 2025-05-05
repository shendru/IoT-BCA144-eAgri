import NavBar from "./components/navbar/NavBar";
import Aside from "./components/aside/Aside02";
import Dashboard from "./components/dashboard/Dashboard02";

function App() {
  return (
    <div className="flex h-full">
      <Aside />
      <Dashboard />
    </div>
  );
}

export default App;
