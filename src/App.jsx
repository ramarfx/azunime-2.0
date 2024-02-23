import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Input from "./components/elements/Input";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <h1 className="text-4xl">Web Nya Belum Jadi Ya Om</h1>
      <div className="flex w-full max-w-sm justify-evenly">
        <Link to={"/login"} className="px-4 py-3 bg-primary rounded-lg mt-5">
          Login
        </Link>
        <Link to={"/register"} className="px-4 py-3 bg-primary rounded-lg mt-5">
          Register
        </Link>
      </div>
    </div>
  );
}
