/* eslint-disable react/prop-types */
import { FiMapPin } from "react-icons/fi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Product = ({ data }) => {
  return (
    <>
      <ResponsiveMasonry>
        <Masonry columnsCount={3} gutter="14px">
          {data?.map((item, i) => (
            <div key={i}>
              <div className="w-full relative bg-white rounded-[10px] overflow-hidden">
                <div>
                  <img src={item.image} alt="" className="w-full" />
                </div>
                <div className="p-2">
                  <h1 className="text-[#00b53f] font-[700] text-[18px]">
                    &#8358;{item.price}
                  </h1>
                  <h2 className="text-black text-[15px] truncate capitalize">
                    {item.title}
                  </h2>
                  <p className="text-[#6c8ea0] mb-[2px] text-[14px] first-letter:capitalize">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1 text-[13px] text-[#6c8ea0]">
                    <FiMapPin />{" "}
                    <h1 className="capitalize">
                      {item.productInfo.location.state},{" "}
                      {item.productInfo.location.lga}
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="bg-[#ebf2f7] py-[5px] px-[8px]  text-[11px] rounded-[5px] text-black capitalize">
                      {item.productInfo.condition}
                    </span>
                    {item.productInfo.advert && (
                      <span>
                        {item.productInfo.advert.type.toLowerCase() ===
                          "enterprise" && (
                          <img
                            src="https://assets.jijistatic.com/static/img/premium-landing/enterprise.svg"
                            alt={item.productInfo.advert.type}
                            className="bg-[#ebf2f7] px-[2px] py-[2px] rounded-sm"
                          />
                        )}
                        {item.productInfo.advert.type.toLowerCase() ===
                          "diamond" && (
                          <img
                            src="https://assets.jijistatic.com/static/img/premium-landing/diamond.svg"
                            alt={item.productInfo.advert.type}
                            className="bg-[#ebf2f7] px-[2px] py-[2px] rounded-sm"
                          />
                        )}
                      </span>
                    )}
                  </div>
                </div>
                <div className="absolute top-5 p-[4px]   bg-[hsla(0,0%,100%,.8)] text-[8px] text-black uppercase translate-y-[-100%] origin-left-top">
                  {item.productInfo.advert.type}
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {/* <div>
        <div className="w-full relative bg-white">
          <div>
            <img
              src="https://pictures-nigeria.jijistatic.com/103879455_MzAwLTIyNS0xOWQ2MDA3MzY3.webp"
              alt=""
            />
          </div>
          <div className="p-2">
            <h1 className="text-[#00b53f] font-[700] text-[18px]">N200,000</h1>
            <h2>Abs Pump Hybrid Camry08</h2>
            <p>Payment on delivery within Lagos</p>
            <div>
              <FiMapPin /> <h1>Lagos, Mushin</h1>
            </div>
            <div>
              <span>Used</span>
              <span>
                <img
                  src="https://assets.jijistatic.com/static/img/premium-landing/enterprise.svg"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Product;
