/* eslint-disable react/prop-types */
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavLinks = ({ url, img, label, count, ...children }) => {
  return (
    <>
      <Link to={url}>
        <div
          className="flex w-full  items-center justify-between cursor-pointer p-2 hover:bg-gray-light "
          {...children}
        >
          <div className="flex items-center gap-1">
            <img src={img} alt={label} className="w-8 h-8 outline-0 border-0" />
            <div className="flex flex-col leading-tight">
              <span className="text-[14px] font-[400] text-[rgba(0,0,0,0.8)]">
                {label}
              </span>
              <span className="text-[12px] font-Helvetica font-[600] text-black">
                {count} ads
              </span>
            </div>
          </div>
          <FiChevronRight />
        </div>
      </Link>
    </>
  );
};

export default NavLinks;
