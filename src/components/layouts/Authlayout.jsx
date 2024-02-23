import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;

  return (
    <>
      <div className="flex md:flex-row flex-col">
        <div className="md:w-[40%] bg-[#F5F5F5]">
          <Image type={type} />
        </div>
        <div className="md:w-[60%] w-full h-screen flex flex-col justify-center items-center p-16">
          <a
            href="#"
            className="text-center font-montserrat text-4xl font-bold">
            <span className="text-primary">Azu</span>nime
          </a>
          {children}
          <Navigation type={type} />
        </div>
      </div>
    </>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p>
        <span className="text-secondary-50">Belum memiliki akun? </span>
        <Link to={"/register"} className="text-white hover:text-primary">
          Daftar Sekarang!
        </Link>
      </p>
    );
  } else if (type === "register") {
    return (
      <p>
        <span className="text-secondary-50">Sudah memiliki akun? </span>
        <Link to={"/login"} className="text-white hover:text-primary">
          Login Sekarang!
        </Link>
      </p>
    );
  }
};

const Image = ({ type }) => {
  if (type === "login") {
    return (
      <img
        src="/login.jpg"
        className="w-full h-full object-cover max-h-screen filter brightness-50"
        alt=""
      />
    );
  } else if (type === "register") {
    return (
      <img
        src="/register.jpg"
        className="w-full h-full object-cover max-h-screen filter brightness-50"
        alt=""
      />
    );
  }
};

export default AuthLayout;
