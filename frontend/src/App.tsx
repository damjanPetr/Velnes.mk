import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="w-full">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
