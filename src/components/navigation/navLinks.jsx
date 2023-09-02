import { FiChevronRight } from "react-icons/fi";

const NavLinks = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-y-1">
        <div
          className="flex w-full  items-center justify-between cursor-pointer p-2 hover:bg-gray-light "
          onMouseEnter={() => console.log(1)}
        >
          <div className="flex items-center gap-1">
            <img
              src="https://assets.jijistatic.com/art/attributes/categories/vehicles.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-HelveticaMedium text-[14px] font-[400]">
                Vehicles
              </span>
              <span className="text-[14px] font-Helvetica font-[600]">
                236,567 ads
              </span>
            </div>
          </div>
          <FiChevronRight />
        </div>
      </div>
    </>
  );
};

export default NavLinks;
