// components/layouts/AuthBtn.tsx
import { auth } from "@/auth"; // Config Auth.js v5 kamu
import { Link } from "@/i18n/navigation";
import { Button } from "../ui/button";
import AuthDropdown from "./AuthDropdown";

export default async function AuthBtn() {
  const session = await auth();

  if (!session?.user) {
    // return (
    //   <Button asChild variant="outline">
    //     <Link href="/login">Login</Link>
    //   </Button>
    // );
    return null;
  }

  // Jika sudah login, berikan datanya ke komponen Client tadi
  return <AuthDropdown userName={session.user.name || "User"} />;
}
