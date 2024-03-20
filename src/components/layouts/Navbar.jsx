import { Link } from "react-router-dom";
import Input from "../elements/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef } from "react";

const Navbar = (props) => {
  const { username, genre } = props;
  const navbar = useRef(null);

  const handleButton = () => {
    navbar.current.classList.toggle("hidden");
  };

  return (
    <section
      id="navbar"
      className="fixed z-[999999999] w-full bg-secondary-200"
    >
      <div className="container">
        <div className="relative flex w-full items-center justify-between gap-10 py-4 text-base">
          <Link to={"/"} className="mr-5 font-montserrat text-2xl font-bold">
            <span className="text-primary">Azu</span>nime
          </Link>

          <nav
            ref={navbar}
            className="absolute right-0 top-16 flex w-fit flex-col items-start justify-between rounded-b-xl border border-primary bg-secondary-200 p-4 pl-5 md:static md:flex md:w-full md:flex-row md:items-center md:border-none md:p-0"
          >
            <ul className="flex flex-col gap-5 md:flex-row">
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

            <div className="flex flex-col-reverse items-start gap-3 md:flex-row md:items-center md:gap-5">
              <Input
                type="text"
                placeholder="Cari..."
                _classname="bg-[#303030] py-2"
              ></Input>
              <div className="my-4 flex items-center gap-5 md:my-0">
                <FontAwesomeIcon icon={faUser} />
                <Link to={"/login"} className="py-2 font-bold text-primary">
                  Login
                </Link>
              </div>
            </div>
          </nav>

          <button className="block md:hidden" onClick={handleButton}>
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
