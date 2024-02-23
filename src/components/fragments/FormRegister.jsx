import Button from "../elements/Button";
import Input from "../elements/Input";

const FormRegister = () => {
  return (
    <>
      <form className="flex flex-col grow-[2] w-full md:w-1/2 justify-center items-center gap-4">
        <h2 className="text-2xl mb-5">Register</h2>

        <Input placeholder="Username" type="text" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button>Register</Button>
      </form>
    </>
  );
};

export default FormRegister;
