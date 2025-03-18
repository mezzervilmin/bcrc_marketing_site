import Image from "next/image";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import BCRCLogo from "@/public/bullcity_logo.png";
import { config } from "./config";

export default function Header() {
  return (
    <nav className="navbar bg-primary shadow-sm">
      <div className="navbar-start">
        <MobileMenu items={config} />
        <a className="btn btn-ghost">
          <Image
            src={BCRCLogo}
            alt="Bull City Running Co logo"
            width={100}
            height={100}
          />
        </a>
      </div>
      <DesktopMenu items={config} />
      <div className="navbar-end">
        <a className="btn">Shop Now!</a>
      </div>
    </nav>
  );
}
