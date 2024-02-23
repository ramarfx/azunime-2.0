import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./view/Login";
import Register from "./view/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
