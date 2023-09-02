/* eslint-disable react/prop-types */
import { FiBookmark } from "react-icons/fi";
import Image from "./Image";
const Card = ({ img, title, price, count }) => {
  return (
    <>
      <div
        className="card bg-white shadow-slate-200  rounded-sm cursor-pointer hover:shadow-xl"
        style={{ boxShadow: "0 1px 2px rgba(96,125,135,.15)" }}
      >
        <figure className="w-full h-[150px] min-h-[150px] bg-white">
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
            <p className="text-sm text-ellipsis font-HelveticaMedium text-[rgba(0,0,0,0.7)] pt-3">
              {title}
            </p>
            <p className="text-[12px] text-[#00B53F]">N&nbsp;{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
