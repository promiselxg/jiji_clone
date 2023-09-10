import Auth from "../../auth";
import { Logo } from "../../../components";

const HeaderNav = () => {
  return (
    <>
      <div
        className="bg-[#00B53F] w-full text-white pt-[4px] fixed min-h-[56px] z-[9999]"
        style={{ boxShadow: "1px 1px 4px rgba(80,114,125,.4)" }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="logo">
            <Logo />
          </div>
          <Auth />
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
