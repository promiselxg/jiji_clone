import "./Ads.scss";
import { trending_ad } from "../../../Data/Data";
const Ads = () => {
  return (
    <>
      <div className="ads">
        <div className="ad__title">
          <h1>Trending ads</h1>
        </div>
        <div className="ad__wrapper">
          {trending_ad.map((d, i) => (
            <div className="ad_item" key={i}>
              <div className="ad__image">
                <img src={d.img} alt="ad_image" />
              </div>
              <div className="ad__info">
                <div className="ad__title">{d.name}</div>
                <div className="ad__price">&#8358;{d.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ads;
