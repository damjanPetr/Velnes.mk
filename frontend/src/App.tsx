import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./helpers/AuthContext";

function App() {
  const { user } = useAuth();
  const navigate = useNavigate();
  console.log(user);
  if (user?.name === "") {
    navigate("/login");
  }
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
