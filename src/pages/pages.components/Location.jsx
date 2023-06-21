import { FiChevronRight } from 'react-icons/fi';
const Location = () => {
  return (
    <>
      <div className="bg-white p-3 rounded-[5px]">
        <div className="text-sm">Location</div>
        <div className="flex justify-between items-center cursor-pointer">
          <span className="text-sm text-[#ccc] font-[400]">All Nigeria</span>
          <span>
            <FiChevronRight className="text-sm text-[#ccc] font-[400]" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Location;
