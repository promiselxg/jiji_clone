const Price = () => {
  return (
    <>
      <div className="flex w-full bg-white rounded-[5px]">
        <div className="px-4 py-2 w-full">
          <div className="flex flex-col">
            <span className="py-2">
              <h1 className="text-[16px] text-[rgba(0,0,0,0.7)] font-[600]">
                Price, N
              </h1>
            </span>
            <div className="flex w-full gap-3  items-center">
              <div className="w-1/2  border border-[#6c8ea0] px-2 pb-2 rounded-[4px]">
                <span className="text-[12px] text-[#6c8ea0]">min</span>
                <input
                  type="text"
                  maxLength={12}
                  className="bg-transparent outline-none border-none w-full text-black text-[14px]"
                />
              </div>
              <span className="text-[20px]">-</span>
              <div className="w-1/2  border border-[#6c8ea0] px-2 pb-2 rounded-[4px]">
                <span className="text-[12px] text-[#6c8ea0]">max</span>
                <input
                  type="text"
                  maxLength={12}
                  className="bg-transparent outline-none border-none w-full text-black text-[14px]"
                />
              </div>
            </div>
            <div className="py-4">
              <div className="flex flex-col mb-2">
                <label className="flex items-center gap-2 cursor-pointer leading-8 py-4 h-[16px]">
                  <input
                    type="radio"
                    name="price"
                    value=""
                    className="radio  border-[2px] border-[#6c8ea0] h-[16px] w-[16px]"
                  />
                  <span className="label-text font-[600] flex gap-2 items-center">
                    <span className="text-[14px] text-black capitalize font-[400]">
                      Under 15 K
                    </span>
                    <span className="text-[14px] text-[#6c8ea0] font-[400] ">
                      - 55 525 ads
                    </span>
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer leading-8 py-4 h-[16px]">
                  <input
                    type="radio"
                    name="price"
                    value=""
                    className="radio  border-[2px] border-[#6c8ea0] h-[16px] w-[16px]"
                  />
                  <span className="label-text font-[600] flex gap-2 items-center">
                    <span className="text-[14px] text-black capitalize font-[400]">
                      15 - 95 K
                    </span>
                    <span className="text-[14px] text-[#6c8ea0] font-[400] ">
                      - 13 881 ads
                    </span>
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer leading-8 py-4 h-[16px]">
                  <input
                    type="radio"
                    name="price"
                    value=""
                    className="radio  border-[2px] border-[#6c8ea0] h-[16px] w-[16px]"
                  />
                  <span className="label-text font-[600] flex gap-2 items-center">
                    <span className="text-[14px] text-black capitalize font-[400]">
                      95 K - 5.4 M
                    </span>
                    <span className="text-[14px] text-[#6c8ea0] font-[400] ">
                      - 92 542 ads
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
