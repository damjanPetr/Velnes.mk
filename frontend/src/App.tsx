import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./helpers/AuthContext";
import { useEffect } from "react";

function App() {
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    // console.log("%c USER", "background: black", user);
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
