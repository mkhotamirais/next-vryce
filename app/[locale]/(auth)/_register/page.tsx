import HaveAccount from "@/components/auth/HaveAccount";
import OauthLogin from "@/components/auth/OauthLogin";
import OrSeparator from "@/components/auth/OrSeparator";
import RegisterForm from "./RegisterForm";
import AuthTitle from "@/components/auth/AuthTitle";

export default function Register() {
  return (
    <>
      <AuthTitle type="register" />
      <OauthLogin />
      <OrSeparator />
      <RegisterForm />
      <HaveAccount type="register" />
    </>
  );
}
