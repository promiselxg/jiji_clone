import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import { HeaderNav } from "../header";

const Layout = () => {
  return (
    <>
      <HeaderNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
