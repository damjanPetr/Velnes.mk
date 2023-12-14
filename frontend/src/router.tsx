import { Routes, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Calendar, {
  AppointmentsLoader,
  ResourcesLoader,
  ServicesLoader,
  UsersLoader,
} from "./pages/Calendar";
import Service from "./pages/Service";
import Products, { ProductsLoader } from "./pages/Products";
import Customers, { CustomersLoader } from "./pages/Customers";
import Marketing from "./pages/Marketing";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import UserOverview from "./pages/UserOverview";
import Account from "./pages/Account";

export type appontimentsProps = {
  name: string;
  start: string;
  resources: resourcesProps[];
  services: servicesProps[];
};

export type resourcesProps = {
  id: number;
  appointmentId: number;
  tool1: string;
  tool2: string;
  saloonId: number;
  createdAt: string;
  updatedAt: string;
};

export type userProps = {
  id: number;
  appointmentId: number;
  email: string;
  name: string;
  saloonId: number;
  createdAt: string;
  updatedAt: string;
};

export type servicesProps = {
  id: number;
  appointmentId: number;
  duration: string;
  name: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

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
      { path: "account", element: <Account /> },
      {
        path: "calendar",
        element: <Calendar />,
        loader: async () => {
          const appointments = await AppointmentsLoader();
          const services = await ServicesLoader();
          const resources = await ResourcesLoader();
          const user = await UsersLoader();

          console.log(
            "%c user",
            "background: black",
            user,
            Array.isArray(user),
          );
          console.log("%c appontiments", "background: red", appointments);
          console.log("%c servicse", "background: blue", services);
          console.log("%c resources", "background: green", resources);
          return {
            appointments,
            services,
            resources,
          };
        },
      },
      { path: "service", element: <Service /> },
      {
        path: "products",
        element: <Products />,
        loader: async () => {
          const data = await ProductsLoader();
          console.log(data);

          return data;
        },
      },
      {
        path: "customers",
        element: <Customers />,
        loader: async () => {
          const data = await CustomersLoader();
          return data;
        },
      },
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
