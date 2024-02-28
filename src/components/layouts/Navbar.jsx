import { Link } from "react-router-dom";
import Input from "../elements/Input";

const Navbar = (props) => {
  const { username, genre } = props;

  return (
    <section id="navbar" className="w-full bg-secondary-200 fixed z-[999999999]">
      <div className="container">
        <div className="flex w-full items-center py-4 gap-10 text-base">
          <Link to={"/"} className="mr-5 font-montserrat text-2xl font-bold"><span className="text-primary">Azu</span>nime</Link>

          <nav className="flex w-full justify-between items-center">
            <ul className="flex gap-5">
              <li>
                <Link to={"#"}>Home</Link>
              </li>
              <li>
                <Link to={"#"}>About</Link>
              </li>
              <li>
                <Link to={"#"}>Genre</Link>
              </li>
              <li>
                <Link to={"#"}>Contact Us</Link>
              </li>
            </ul>

            <div className="flex gap-5 items-center">
              <Input type="text" placeholder="Cari..." _classname="bg-[#303030] py-2"></Input>
              <Link to={'/login'} className="text-primary font-bold">Login</Link>
              <Link to={'/register'} className="text-primary font-bold">Register</Link>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
