import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "../../pages/components/Header";

const CategoryLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default CategoryLayout;
