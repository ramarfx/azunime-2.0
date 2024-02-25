import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const DefaultLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};

export default DefaultLayout;
