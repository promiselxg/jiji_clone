import React from 'react';
import { FiPlus } from 'react-icons/fi';
import Card from '../Card';
import Image from '../Image';

const ClassifiedAds = () => {
  return (
    <>
      <div className="flex flex-col container gap-3">
        <div className="flex gap-3">
          <div className="w-[72%] h-[220px] relative flex items-center">
            <span
              className="bg-[#000] h-[40%] absolute left-0 flex items-center text-[34px] text-white"
              style={{ background: 'rgb(22, 22, 22, 0.5)' }}
            >{`<`}</span>
            <Image
              src="https://assets.jiji.ng/static/img/banners/main_how_to_buy.jpg"
              alt="ad"
              className="flex justify-between h-[220px] w-full"
            />
            <span
              className="bg-[#000] h-[40%] absolute right-0 flex items-center text-[34px] text-white"
              style={{ background: 'rgb(22, 22, 22, 0.5)' }}
            >{`>`}</span>
          </div>
          <div className="w-[28%] bg-[#FEA03C] h-[220px] text-white flex justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="text-[18px] font-[600]">Got something to sell?</h2>
              <div className="bg-white rounded-full cursor-pointer shadow-md hover:shadow-lg">
                <FiPlus className="text-[120px] text-[#FEA03C]" />
              </div>
              <h2 className="text-[18px]">Post an advert for free!</h2>
            </div>
          </div>
        </div>
        <h1 className="font-[700] text-[20px]">Trending Ads</h1>
        <div className="flex w-full">
          <div className="w-full grid grid-cols-4  gap-2">
            <Card
              img={`https://pictures-nigeria.jijistatic.com/119123359_MTUwMC0xMTI1LThiNTU1ZjJkMjk.webp`}
              title="Toyota land cruise prado 4.0..."
              count="10"
              price="5,000,000"
            />
            <Card
              img={`https://pictures-nigeria.jijistatic.com/119187852_MTEyOS0xNTAwLWRlNDhhMDRjODI.webp`}
              title="Apple iPhone 8 Plus 64 GB Gold"
              count="3"
              price="87,500"
            />
            <Card
              img={`https://pictures-nigeria.jijistatic.com/119168054_MzAwLTQwMC03MDk5YTQzYjQy.webp`}
              title="Furnished 2bdrm Bungalow..."
              count="5"
              price="500,000 per annum"
            />
            <Card
              img={`https://pictures-nigeria.jijistatic.com/119154567_NzQ0LTk5Mi05Zjk5Yzk5OWJi.webp`}
              title="2bdrm Block of Flats in Ayobo"
              count="11"
              price="6,000 per annum"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassifiedAds;
