import { FiChevronRight } from "react-icons/fi";
import React from "react";

const Navbar = () => {
  const [isShow, setIshow] = React.useState(false);
  return (
    <>
      <div className="flex w-full relative">
        {/* <NavLinks /> */}
        <div className="flex flex-col w-full gap-y-1">
          <div
            className="flex w-full  items-center justify-between cursor-pointer p-2 hover:bg-[#ebf2f7] "
            onMouseEnter={() => setIshow(true)}
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
        <div
          className="flex bg-white h-[550px] absolute w-full  left-[320px] top-0 border-l-[red]"
          style={{
            boxShadow: "2px 2px 4px 0 rgba(0,0,0,.08)",
            borderLeft: "1px solid #00b53f",
          }}
        >
          deede
        </div>
      )}
    </>
  );
};

export default Navbar;
