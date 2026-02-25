import Logo from "../Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import SwitchLangButton from "../SwitchLangButton";

export default function Header() {
  return (
    <header className="h-16 sticky top-0 bg-white/60 z-30 backdrop-blur-lg">
      <div className="container flex gap-8 items-center justify-between">
        <Logo />
        <div className="flex-1">
          <NavDesktop />
          <div className="flex items-center justify-end gap-2">
            <div className="block lg:hidden">
              <SwitchLangButton />
            </div>
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
}
