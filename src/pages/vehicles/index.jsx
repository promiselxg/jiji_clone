import { BreadcrumbsWithIcon } from "../../components/common/Breadcrumb";
import CategoryCard from "../components/Cards/Category";
import Product from "../components/Cards/Product";
import Location from "../components/Location";
import Price from "../components/Price";
import { vehiclesData, vehiclesProductData } from "../data";
import Sort from "../components/Sort";

const Vehicles = () => {
  return (
    <>
      <div className="w-full pb-[50px]">
        <div className="container mx-auto pt-16 w-[85%]">
          <div className="w-full flex">
            <BreadcrumbsWithIcon />
          </div>
          <div className="flex w-full justify-between gap-3">
            <div className="w-[25%]">
              <CategoryCard data={vehiclesData} />
              <Location />
              <Price />
            </div>
            <div className="w-3/4">
              <Sort />
              <Product data={vehiclesProductData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicles;
