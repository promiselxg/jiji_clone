/* eslint-disable react/prop-types */
import { FiChevronRight } from "react-icons/fi";

const NavLinks = ({ img, label, count, ...children }) => {
  return (
    <>
      <div
        className="flex w-full  items-center justify-between cursor-pointer p-2 hover:bg-gray-light "
        {...children}
      >
        <div className="flex items-center gap-1">
          <img src={img} alt={label} className="w-[40px] h-[40px]" />
          <div className="flex flex-col leading-tight">
            <span className="font-HelveticaMedium text-[14px] font-[400]">
              {label}
            </span>
            <span className="text-[14px] font-Helvetica font-[600]">
              {count} ads
            </span>
          </div>
        </div>
        <FiChevronRight />
      </div>
    </>
  );
};

export default NavLinks;
