import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { useAuthContext } from "../../../context/AuthContext";
import axiosClient from "../../../axiosClient";
import { useEffect } from "react";

const DefaultLayout = () => {
  const { token, user, setUser } = useAuthContext();

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  useEffect(() => {
    getUser(); 
  },[])

  const getUser = async () => {
    const request = axiosClient.get("/user");
    try {
      const { data } = await request;
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header>
        <Navbar user={user.name} />
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};

export default DefaultLayout;
