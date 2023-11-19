import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="w-full">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
