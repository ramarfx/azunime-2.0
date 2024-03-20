import { useRef } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import axiosClient from "../../axiosClient";
import { useAuthContext } from "../../context/AuthContext";

const FormRegister = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setUser, setToken, user } = useAuthContext();

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const request = axiosClient.post("/register", data);
    try {
      const { data } = await request;
      setToken(data.token);
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }

    await console.log(user);
  };
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex w-full grow-[2] flex-col items-center justify-center gap-4 md:w-1/2"
      >
        <h2 className="mb-5 text-2xl">Register</h2>

        <Input placeholder="Username" type="text" ref={usernameRef} />
        <Input placeholder="Email" type="email" ref={emailRef} />
        <Input placeholder="Password" type="password" ref={passwordRef} />
        <Button>Register</Button>
      </form>
    </>
  );
};

export default FormRegister;
