import { FiChevronRight } from "react-icons/fi";
import React from "react";

const Navbar = () => {
  const [isShow, setIshow] = React.useState(true);
  return (
    <>
      <div className="flex w-full relative">
        {/* <NavLinks /> */}
        <div className="flex flex-col w-full gap-y-1">
          <div
            className="flex w-full  items-center justify-between cursor-pointer p-2 hover:bg-gray-light "
            onMouseEnter={() => setIshow(true)}
            onMouseLeave={() => setIshow(false)}
          >
            <div className="flex items-center gap-1">
              <img
                src="https://assets.jijistatic.com/art/attributes/categories/vehicles.png"
                alt=""
                className="w-[40px] h-[40px]"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-HelveticaMedium text-[14px] font-[400]">
                  Vehicles
                </span>
                <span className="text-[14px] font-Helvetica font-[600]">
                  236,567 ads
                </span>
              </div>
            </div>
            <FiChevronRight />
          </div>
          <div
            className="flex w-full  items-center justify-between cursor-pointer p-2 hover:bg-gray-light "
            onMouseEnter={() => setIshow(true)}
            onMouseLeave={() => setIshow(false)}
          >
            <div className="flex items-center gap-1">
              <img
                src="https://assets.jijistatic.com/art/attributes/categories/vehicles.png"
                alt=""
                className="w-[40px] h-[40px]"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-HelveticaMedium text-[14px] font-[400]">
                  Vehicles
                </span>
                <span className="text-[14px] font-Helvetica font-[600]">
                  236,567 ads
                </span>
              </div>
            </div>
            <FiChevronRight />
          </div>
        </div>
      </div>
      {isShow && (
        <div className="flex bg-[black] h-[550px] absolute w-full  left-[320px] top-0">
          deede
        </div>
      )}
    </>
  );
};

export default Navbar;
