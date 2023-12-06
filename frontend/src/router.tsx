import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Calendar from "./pages/Calendar";
import Service from "./pages/Service";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Marketing from "./pages/Marketing";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import UserOverview from "./pages/UserOverview";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "welcome", element: <Welcome /> },
      { path: "calendar", element: <Calendar /> },
      { path: "service", element: <Service /> },
      { path: "products", element: <Products /> },
      { path: "customers", element: <Customers /> },
      { path: "marketing", element: <Marketing /> },
      { path: "reports", element: <Reports /> },
      { path: "settings", element: <Settings /> },
      {
        path: ":userId",
        element: <UserOverview />,
        loader: ({ params }) => {
          const userId = params.userId;

          return true;
        },
      },
    ],
  },
]);
export default router;
