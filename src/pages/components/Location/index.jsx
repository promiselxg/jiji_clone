import { FiChevronRight } from "react-icons/fi";

const Location = () => {
  return (
    <>
      <div className="flex w-full justify-between bg-white px-4 py-3 rounded-[5px] mb-[15px]">
        <div className="flex items-center justify-between w-full  cursor-pointer">
          <div className="leading-tight">
            <h1 className="text-[14px] text-black">Location</h1>
            <span className="text-[12px] text-[#6c8ea0]">All Nigeria</span>
          </div>
          <FiChevronRight />
        </div>
      </div>
    </>
  );
};

export default Location;
