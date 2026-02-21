import { useTranslations } from "next-intl";
import React from "react";
import Logo from "../Logo";

export default function AuthTitle({ type }: { type: "login" | "register" }) {
  const t = useTranslations("auth");

  const loginTitle = t("login_title");
  const registerTitle = t("register_title");

  return (
    <div className="flex flex-col items-center">
      <Logo />
      <h1 className="text-xl font-semibold mb-6">{type === "login" ? loginTitle : registerTitle}</h1>
    </div>
  );
}
