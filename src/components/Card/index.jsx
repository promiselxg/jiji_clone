import React from 'react';
import Image from '../Image';
import { FiBookmark } from 'react-icons/fi';
const Card = ({ img, title, price, count }) => {
  return (
    <>
      <div className="card bg-base-100 shadow-slate-200  rounded-sm cursor-pointer hover:shadow-xl">
        <figure className="w-full h-[150px] min-h-[150px]">
          <Image img={img} alt="car" />
        </figure>
        <div className="flex relative">
          <div className="absolute w-full">
            <div className="absolute -top-[25px] bg-[rgba(0,0,0,0.5)] text-white p-1 text-xs">
              {count}
            </div>
            <button className="btn btn-circle absolute -top-[15px] right-1 btn-sm bg-white border-0 shadow text-[#00B53F] hover:bg-white hover:shadow-lg">
              <FiBookmark />
            </button>
          </div>
          <div className="flex flex-col p-2">
            <p className="text-sm">{title}</p>
            <p className="text-sm text-[#00B53F]">N&nbsp;{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
