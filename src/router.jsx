import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./view/Login";
import Register from "./view/Register";
import GuestLayout from "./components/layouts/pages/GuestLayout";
import DefaultLayout from "./components/layouts/pages/DefaultLayout";
import Dashboard from "./view/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {path: '/', element: <Navigate to={'/dashboard'} />},
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },

  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {path: '/', element: <Navigate to={'/dashboard'} />},
      { path: "/dashboard", element: <Dashboard /> }
    ],
  },
]);

export default router;
