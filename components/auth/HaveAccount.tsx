import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HaveAccount({ type }: { type: "login" | "register" }) {
  const t = useTranslations("auth");
  const haveAccount = t("account_1");
  const dontHaveAccount = t("account_0");
  return (
    <div className="text-center mt-8">
      <p>
        {type === "login" ? dontHaveAccount : haveAccount}
        <Link href={`/${type === "login" ? "register" : "login"}`} className="text-primary hover:underline pl-2">
          {type === "login" ? "Register" : "Login"}
        </Link>
      </p>
    </div>
  );
}
