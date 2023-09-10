/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
  //const shorten = () => {};
  return (
    <>
      <div className="flex w-full flex-col mb-[15px]">
        <div className="w-full bg-[#00b53f] text-white text-[14px] font-[700] flex flex-col px-3 py-2 rounded-tl-[8px] rounded-tr-[8px]">
          <h1>Categories</h1>
        </div>
        <div className="flex flex-col px-4 py-2 leading-loose bg-white">
          <h2 className="font-[700] text-[14px] leading-normal text-black">
            Vehicles
          </h2>
          <div className="indent-3">
            <ul className="leading-[25px] ">
              {data?.map((item, i) => (
                <li key={i}>
                  <Link
                    to="/"
                    className="text-black text-[12px] flex items-center"
                  >
                    <div className="text-[14px] whitespace-nowrap text-ellipsis capitalize">
                      {item?.title}
                    </div>
                    <div className="text-[#6c8ea0] text-[12px] font-[400] whitespace-nowrap">
                      | {item?.count}
                    </div>
                  </Link>
                </li>
              ))}

              <li>
                <a
                  href="#"
                  className="text-[#00b53f] underline decoration-dotted"
                >
                  Show all {data?.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
