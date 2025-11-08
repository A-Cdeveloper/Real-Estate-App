import { NAVIGATION_LINKS } from "@/lib/constants";
import CustomLink from "./CustumLink";

const DesktopNavigation = () => {
  return (
    <div className="hidden md:flex items-center gap-8 font-nunito-sans">
      {NAVIGATION_LINKS.map((link) => (
        <CustomLink key={link.href} href={link.href}>
          {link.label}
        </CustomLink>
      ))}
    </div>
  );
};

export default DesktopNavigation;
