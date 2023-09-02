import { FiChevronRight } from "react-icons/fi";
import Image from "../common/Image";

// eslint-disable-next-line react/prop-types
const SidebarList = ({ img, title, count, icon, ...children }) => {
  return (
    <>
      <div
        className="flex items-center justify-between w-full mb-1 cursor-pointer hover:bg-blue-100 p-1 mas"
        {...children}
      >
        <div className="flex items-center gap-2">
          <Image src={img} alt={title} className="w-8 h-8 outline-0 border-0" />
          <div className="flex flex-col">
            <span className="text-[13px]">{title}</span>
            <span className="text-[12px] font-semibold">{count} ads</span>
          </div>
        </div>

        {icon && (
          <div>
            <FiChevronRight className="text-[1.2rem] mr-1 text-inherit" />
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarList;
