import { FiBookmark, FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <>
      <div className="w-full flex items-center bg-white  text-[green] justify-between gap-5 pr-5 h-[40px] rounded-[5px]">
        <input
          type="text"
          placeholder="Search in"
          className="bg-transparent text-[green] outline-none border-none px-3 w-full"
        />
        <FiBookmark className="text-[28px] cursor-pointer" />
        <FiSearch className="text-[28px] cursor-pointer" />
      </div>
    </>
  );
};

export default Search;
