import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

const GuestLayout = () => {
  const { token } = useAuthContext();

  if (token) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default GuestLayout;
