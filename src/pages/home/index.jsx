import { FiPlus } from "react-icons/fi";
import { HomeSlider, Navbar } from "../../components";
import Card from "../../components/common/Card";
import Hero from "../../components/header/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex w-full bg-whitesmoke ">
        <div className="container flex mx-auto w-[85%] py-3 justify-between gap-3 ">
          <div
            className="w-1/4 bg-[#fff] sticky top-[70px]  h-[550px] z-10 overflow-y-clip"
            style={{ boxShadow: "1px 1px 4px rgba(80,114,125,.4)" }}
          >
            <Navbar />
          </div>
          <div className="h-fit w-3/4">
            <div className="flex gap-3 ">
              <HomeSlider />
              <div className="w-[28%] bg-[#FEA03C] h-[220px] text-white flex justify-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <h2 className="text-[18px] font-[600] font-HelveticaMedium">
                    Got something to sell?
                  </h2>
                  <div className="bg-white rounded-full cursor-pointer shadow-md hover:shadow-lg">
                    <FiPlus className="text-[120px] text-[#FEA03C]" />
                  </div>
                  <h2 className="text-[18px]">Post an advert for free!</h2>
                </div>
              </div>
            </div>
            <section>
              <h2 className="text-[20px] text-ellipsis font-HelveticaMedium text-[rgba(0,0,0,0.7)] pt-4 -mb-1">
                Trending ads
              </h2>
              <div className="flex w-full py-5">
                <div className="w-full grid grid-cols-4 gap-3">
                  <Card
                    img={`https://pictures-nigeria.jijistatic.com/119123359_MTUwMC0xMTI1LThiNTU1ZjJkMjk.webp`}
                    title="Toyota land cruise prado 4.0"
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
                    title="Furnished 2bdrm Bungalow"
                    count="5"
                    price="500,000 per annum"
                  />
                  <Card
                    img={`https://pictures-nigeria.jijistatic.com/119154567_NzQ0LTk5Mi05Zjk5Yzk5OWJi.webp`}
                    title="2bdrm Block of Flats in Ayobo"
                    count="11"
                    price="6,000 per annum"
                  />
                  <Card
                    img={`https://pictures-nigeria.jijistatic.com/114716379_MzAwLTIyNS01NjM1ZjZmZDNk.webp`}
                    title="Toyota land cruise prado 4.0"
                    count="10"
                    price="5,000,000"
                  />
                  <Card
                    img={`https://pictures-nigeria.jijistatic.com/119352578_MTUwMC0xMTI1LTRhMDU5N2M0M2U.webp`}
                    title="Apple iPhone 8 Plus 64 GB Gold"
                    count="3"
                    price="87,500"
                  />
                  <Card
                    img={`https://pictures-nigeria.jijistatic.com/119348526_NzYwLTEwMTQtMmJkZjM0OGEwMg.webp`}
                    title="Furnished 2bdrm Bungalow"
                    count="5"
                    price="500,000 per annum"
                  />
                  <Card
                    img={`https://pictures-nigeria.jijistatic.com/118996414_MzAwLTQwMC0wZTY0MmM3NTk3.webp`}
                    title="2bdrm Block of Flats in Ayobo"
                    count="11"
                    price="6,000 per annum"
                  />
                  <Card
                    img={`https://pictures-nigeria.jijistatic.com/119356556_MTUwMC0yMDAwLTRhZGViZmU5MDA.webp`}
                    title="Toyota land cruise prado 4.0"
                    count="10"
                    price="5,000,000"
                  />
                  <Card
                    img={`https://pictures-nigeria.jijistatic.com/102293136_MzAwLTQwMS03MjNkZDgzNGNl.webp`}
                    title="Apple iPhone 8 Plus 64 GB Gold"
                    count="3"
                    price="87,500"
                  />
                  <Card
                    img={`https://pictures-nigeria.jijistatic.com/119344504_MTAyNC03NjgtNjRmYjYzN2FmMw.webp`}
                    title="Furnished 2bdrm Bungalow"
                    count="5"
                    price="500,000 per annum"
                  />
                  <Card
                    img={`https://pictures-nigeria.jijistatic.com/119386908_MTUwMC0yMDAwLThiOTc5MGFjOTA.webp`}
                    title="2bdrm Block of Flats in Ayobo"
                    count="11"
                    price="6,000 per annum"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
