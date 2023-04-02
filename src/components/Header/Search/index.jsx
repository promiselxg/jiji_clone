import React from 'react';
import { FiSearch, FiMapPin } from 'react-icons/fi';
const Search = () => {
  return (
    <>
      <div className=" w-2/6 flex flex-col items-center">
        <div className="flex pt-[20px] text-white">
          <span className="text-[20px] font-bold mr-2">Find anything in</span>{' '}
          <span className="flex items-center gap-2 bg-black py-1 px-4 rounded text-sm cursor-pointer">
            <FiMapPin /> All Nigeria
          </span>
        </div>
        <div className="flex items-center bg-white w-full p-3 mt-20 rounded-sm">
          <input
            type="text"
            className="transparent w-full outline-0 text-[#bbb]"
          />
          <FiSearch className="text-3xl text-[#00b53f]" />
        </div>
      </div>
    </>
  );
};

export default Search;
