import Advert from "./Advert/Advert";
import Ads from "./Ads/Ads";
import "./Body.scss";
const Body = () => {
  return (
    <>
      <div className="body__container">
        <Advert />
        <Ads />
      </div>
    </>
  );
};

export default Body;
