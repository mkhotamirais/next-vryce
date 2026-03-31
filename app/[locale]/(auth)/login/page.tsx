import React, { use } from "react";
import LoginForm from "./LoginForm";
// import HaveAccount from "@/components/auth/HaveAccount";
// import OauthLogin from "@/components/auth/OauthLogin";
// import OrSeparator from "@/components/auth/OrSeparator";
import AuthTitle from "@/components/auth/AuthTitle";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Login({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);
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
