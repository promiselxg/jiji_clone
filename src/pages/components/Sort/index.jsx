import { BiSortAlt2 } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { FiGrid } from "react-icons/fi";

const Sort = () => {
  return (
    <>
      <div className="flex flex-col pb-5 mr-2">
        <h1 className="text-[#464b4f] text-[25px] font-[600] transition-all ">
          Vehicles in Nigeria
        </h1>
        <div className="flex items-center justify-between py-3">
          <div>
            <FiGrid className="text-[20px] text-[#00b53f]" />
          </div>
          <div className="flex items-center gap-4 text-[#a6b8bd]">
            <h1 className="text-[14px]">Sort by:</h1>
            <span className="flex items-center gap-2 cursor-pointer">
              <BiSortAlt2 className="text-[20px] text-[#00b53f]" />{" "}
              <h1 className="text-[14px]">Recommended</h1>
            </span>
            <span>|</span>
            <span className="flex items-center gap-2 cursor-pointer">
              <CiClock2 className="text-[20px] text-[#00b53f]" />{" "}
              <h1 className="text-[14px]">Any time</h1>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sort;
