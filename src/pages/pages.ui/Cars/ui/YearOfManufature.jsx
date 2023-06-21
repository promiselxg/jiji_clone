import React, { useState } from 'react';

const YearOfManufaturing = () => {
  const dateOfManufature = [
    {
      name: '2019 - 2023',
      count: 37090,
    },
    {
      name: '2014 - 2018',
      count: 12771,
    },
    {
      name: '2009 - 2013',
      count: 120905,
    },
    {
      name: '2004 - 2008',
      count: 26403,
    },
    {
      name: '1999 - 2003',
      count: 6036,
    },
    {
      name: '1994 - 1998',
      count: 515,
    },
    {
      name: '1984 - 1988',
      count: 31,
    },
    {
      name: '1979 - 1983',
      count: 14,
    },
    {
      name: '1974 - 1973',
      count: 4,
    },
    {
      name: '1964 - 1968',
      count: 2,
    },
    {
      name: '1959 - 1963',
      count: 1,
    },
  ];
  const [select, setSelect] = useState('');
  return (
    <>
      <div className="flex justify-between items-center w-full gap-2 pr-5 mb-4">
        <div className="flex flex-col border border-gray-500 w-1/2 p-1 rounded-md">
          <span className="text-[12px] text-[#bbb] font-[600]">min</span>
          <input type="text" className="outline-none text-sm" />
        </div>
        <div>-</div>
        <div className="flex flex-col border border-gray-500 w-1/2 p-1 rounded-md">
          <span className="text-[12px] text-[#bbb] font-[600]">max</span>
          <input type="text" className="outline-none text-sm" />
        </div>
      </div>
      <div className="max-h-[185px] overflow-y-scroll make">
        {dateOfManufature.map((date, i) => (
          <div className="flex flex-col mb-2" key={i}>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                name={`${date.name}`}
                value={`${date.name}`}
                className="radio checked:bg-[green]"
                checked={select === `${date.name}`}
                onChange={(e) => setSelect(e.target.value)}
              />
              <span className="label-text  flex gap-2">
                <span className="capitalize">{date.name}</span>
                <span className="text-[12px] text-[#ccc] font-[400] ">
                  - {date.count} ads
                </span>
              </span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default YearOfManufaturing;
