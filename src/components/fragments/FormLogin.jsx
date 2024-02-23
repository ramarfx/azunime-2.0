import Button from "../elements/Button";
import Input from "../elements/Input";

const FormLogin = () => {
  return (
    <>
      <form className="flex flex-col grow-[2] w-full md:w-1/2 justify-center items-center gap-4">
        <h2 className="text-2xl mb-5">Login</h2>

        <Input placeholder="email" type="email" />
        <Input placeholder="password" type="password" />
        <Button>Login</Button>
      </form>
    </>
  );
};

export default FormLogin;
