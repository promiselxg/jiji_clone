import Search from "./Search";
import Auth from "../../components/auth";
import { Logo } from "../../components";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div
        className="bg-[#00B53F] w-full text-white  flex fixed min-h-[56px] z-[9999] items-center"
        style={{ boxShadow: "1px 1px 4px rgba(80,114,125,.4)" }}
      >
        <div className="container mx-auto flex items-center gap-5 justify-between w-[85%]">
          <div className="flex items-center gap-8">
            <FiMenu className="text-[30px] text-white cursor-pointer" />
            <Logo />
          </div>
          <div className="flex">
            <Search />
          </div>
          <div className="flex items-center gap-10 justify-between w-[55%]">
            <h1 className="text-white opacity-40">SELL FASTER BUY SMARTER</h1>
            <Auth />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
