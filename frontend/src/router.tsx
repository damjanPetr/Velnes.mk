import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Account from "./pages/Account";
import Calendar, {
  AppointmentsLoader,
  ResourcesLoader,
  ServicesLoader,
  UsersLoader,
  roomsLoader,
  toolsLoader,
} from "./pages/Calendar";
import Customers, { CustomersLoader } from "./pages/Customers";
import Login from "./pages/Login";
import Marketing from "./pages/Marketing";
import Products, { ProductsLoader } from "./pages/Products";
import Register from "./pages/Register";
import Reports from "./pages/Reports";
import Service from "./pages/Service";
import Settings from "./pages/Settings";
import UserOverview from "./pages/UserOverview";
import Welcome from "./pages/Welcome";

export type appontimentsProps = {
  name: string;
  start: string;
  resources: resourcesProps[];
  services: servicesProps[];
};

export type roomsProps = {
  id: number;
  name: string;
  saloonId: number;
  createdAt: string;
  updatedAt: string;
};
export type toolsProps = {
  id: number;
  name: string;
  saloonId: number;
  createdAt: string;
  updatedAt: string;
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
          const users = await UsersLoader();
          const rooms = await roomsLoader();
          const tools = await toolsLoader();

          console.log("%c rooms", "background: cyan", rooms);
          console.log("%c tools", "background: purple", tools);

          console.log(
            "%c user",
            "background: black",
            users,
            Array.isArray(users),
          );
          console.log("%c appointments", "background: red", appointments);
          console.log("%c services", "background: blue", services);
          console.log("%c resources", "background: green", resources);
          return {
            appointments,
            services,
            resources,
            users,
            tools,
            rooms,
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
