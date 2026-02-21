import React from "react";
import LoginForm from "./LoginForm";
// import HaveAccount from "@/components/auth/HaveAccount";
// import OauthLogin from "@/components/auth/OauthLogin";
// import OrSeparator from "@/components/auth/OrSeparator";
import AuthTitle from "@/components/auth/AuthTitle";

export default function Login() {
  return (
    <>
      <AuthTitle type="login" />
      {/* <OauthLogin /> */}
      {/* <OrSeparator /> */}
      <LoginForm />
      {/* <HaveAccount type="login" /> */}
    </>
  );
}
