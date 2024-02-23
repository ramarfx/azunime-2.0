import FormLogin from "../components/fragments/FormLogin";
import AuthLayout from "../components/layouts/Authlayout";

const Login = () => {
  return (
    <AuthLayout type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default Login;
