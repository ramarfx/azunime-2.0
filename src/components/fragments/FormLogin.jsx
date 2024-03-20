import { useRef } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import axiosClient from "../../axiosClient";
import { useAuthContext } from "../../context/AuthContext";

const FormLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setUser, setToken } = useAuthContext();

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const request = axiosClient.post("/login", data);
    try {
      const { data } = await request;
      setToken(data.token);
      setUser(data.user);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex w-full grow-[2] flex-col items-center justify-center gap-4 md:w-1/2"
      >
        <h2 className="mb-5 text-2xl">Login</h2>

        <Input placeholder="email" type="email" ref={emailRef} />
        <Input placeholder="password" type="password" ref={passwordRef} />
        <Button>Login</Button>
      </form>
    </>
  );
};

export default FormLogin;
