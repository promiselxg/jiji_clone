import React from 'react';
import { Links } from '../../components';

const Category = ({ label, bg }) => {
  return (
    <>
      <div>
        <div
          className={`flex w-full p-3 text-white font-[600] bg-[${bg}] rounded-tr-[5px] rounded-tl-[5px]`}
        >
          {label}
        </div>
        <div className="flex flex-col bg-white p-3 shadow-sm rounded-br-[5px] rounded-bl-[5px]">
          <span>Vehicles</span>
          <div className="flex flex-col ml-4 leading-7">
            <Links
              url="/"
              label="Cars"
              count=" | 83512"
              className="font-[400]"
            />
            <Links
              url="/"
              label="Buses & Microbuses"
              count=" | 5512"
              className="font-[400]"
            />
            <Links
              url="/"
              label="Heavy Equipment"
              count=" | 2012"
              className="font-[400]"
            />
            <Links
              url="/"
              label="Motorcycles & Scooters"
              count=" | 2040"
              className="font-[400]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
