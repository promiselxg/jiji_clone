import HeaderBanner from "./HeaderBanner/HeaderBanner";
import HeaderTop from "./HeaderTop/HeaderTop";
const Header = () => {
  return (
    <>
      <div className="header">
        <HeaderTop />
        <HeaderBanner />
      </div>
    </>
  );
};

export default Header;
