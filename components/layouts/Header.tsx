import Logo from "../Logo";
import NavDesktop from "./NavDesktop";
// import NavMobile from "./NavMobile";
import SwitchLangButton from "../SwitchLangButton";
import NavMobilePushBtn from "./NavMobilePushBtn";
import NavMobilePushContent from "./NavMobilePushContent";

export default function Header() {
  return (
    <header className="min-h-20 sticky top-0 bg-white/80 z-30 backdrop-blur">
      <div className="container flex gap-8 items-center justify-between min-h-20">
        <Logo />
        <div className="flex-1">
          <NavDesktop />
          <div className="flex items-center justify-end gap-2">
            <div className="block lg:hidden">
              <SwitchLangButton />
            </div>
            {/* <NavMobile /> */}
            <NavMobilePushBtn />
          </div>
        </div>
      </div>
      <NavMobilePushContent />
    </header>
  );
}
