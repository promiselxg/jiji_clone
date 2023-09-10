import { FiSearch, FiMapPin } from "react-icons/fi";
const Search = () => {
  return (
    <>
      <div className=" w-2/6 flex flex-col items-center relative">
        <div className="flex pt-[20px] text-white gap-2">
          <div className="absolute flex gap-2 left-0 top-10 w-full justify-center">
            <span className="text-white font-HelveticaMedium">
              Find anything in
            </span>{" "}
            <span className="flex items-center  gap-2 bg-black text-white px-3 py-1 rounded text-[12px] font-HelveticaMedium">
              <FiMapPin /> All Nigeria
            </span>
          </div>
        </div>
        <div className="flex items-center bg-white w-full p-3 mt-20 rounded-sm ">
          <input type="text" className="bg-white w-full outline-0 text-text" />
          <FiSearch className="text-3xl text-[#00b53f]" />
        </div>
      </div>
    </>
  );
};

export default Search;
