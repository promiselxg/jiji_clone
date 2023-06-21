import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const Make = () => {
  const carMake = [
    {
      name: 'Show all',
      count: 37090,
    },
    {
      name: 'Toyota',
      count: 37090,
    },
    {
      name: 'laxus',
      count: 12771,
    },
    {
      name: 'mercedes-benz',
      count: 120905,
    },
    {
      name: 'honda',
      count: 37090,
    },
    {
      name: 'ford',
      count: 37090,
    },
    {
      name: 'acura',
      count: 2300,
    },
    {
      name: 'alfa romeo',
      count: 37090,
    },
    {
      name: 'aston martin',
      count: 37090,
    },
    {
      name: 'audi',
      count: 37090,
    },
    {
      name: 'BAW',
      count: 37090,
    },
    {
      name: 'bentley',
      count: 37090,
    },
    {
      name: 'buick',
      count: 37090,
    },
    {
      name: 'brabus',
      count: 37090,
    },
    {
      name: 'cadillac',
      count: 37090,
    },
    {
      name: 'changan',
      count: 37090,
    },
  ];
  const [select, setSelect] = useState('Show all');
  return (
    <>
      <div className="search">
        <div className="flex items-center w-full  p-3 gap-3 border rounded-[5px] mb-4">
          <FiSearch />
          <input
            type="search"
            name=""
            id=""
            className="w-full outline-none border-0 bg-transparent text-sm"
            placeholder="Find Make"
          />
        </div>
        <div className="max-h-[185px] overflow-y-scroll make">
          {carMake.map((make, i) => (
            <div className="flex flex-col mb-2" key={i}>
              <label className="flex items-center gap-4 cursor-pointer">
                <input
                  type="radio"
                  name={`${make.name}`}
                  value={`${make.name}`}
                  className="radio checked:bg-[green]"
                  checked={select === `${make.name}`}
                  onChange={(e) => setSelect(e.target.value)}
                />
                <span className="label-text font-[600] flex gap-2">
                  <span className="font-[600] capitalize">{make.name}</span>
                  <span className="text-[12px] text-[#ccc] font-[400] ">
                    - {make.count} ads
                  </span>
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Make;
