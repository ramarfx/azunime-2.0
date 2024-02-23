import FormRegister from "../components/fragments/FormRegister";
import AuthLayout from "../components/layouts/Authlayout";

const Register = () => {
  return (
    <AuthLayout type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default Register;
