import Image from "../../common/Image";

const HomeSlider = () => {
  return (
    <>
      <div className="w-[72%] h-[220px] relative flex items-center">
        <span
          className="bg-[#000] h-[40%] absolute left-0 flex items-center text-[34px] text-white"
          style={{ background: "rgb(22, 22, 22, 0.5)" }}
        >{`<`}</span>
        <Image
          src="https://assets.jiji.ng/static/img/banners/main_how_to_buy.jpg"
          alt="ad"
          className="flex justify-between h-[220px] w-full"
        />
        <span
          className="bg-[#000] h-[40%] absolute right-0 flex items-center text-[34px] text-white"
          style={{ background: "rgb(22, 22, 22, 0.5)" }}
        >{`>`}</span>
      </div>
    </>
  );
};

export default HomeSlider;
