import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FormLogin from "./components/fragments/FormLogin";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>Error</div>
    },
{
    path: '/login',
        element: <FormLogin />
},
])

export default router;