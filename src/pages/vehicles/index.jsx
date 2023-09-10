import { BreadcrumbsWithIcon } from "../../components/common/Breadcrumb";
import CategoryCard from "../components/Cards/Category";
import Location from "../components/Location";
import Price from "../components/Price";
import { vehiclesData } from "../data";

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
            {/* <div className="bg-[green] w-3/4">deede</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicles;
