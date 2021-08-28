import "./Ads.scss";
import { trending_ad } from "../../../Data/Data";
import { IconButton } from "@material-ui/core";
import { StarBorderOutlined } from "@material-ui/icons";
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
                <span className="ad__special">2X TOP</span>
                <span className="ad__picsCount">7</span>
                <IconButton className="icon">
                  <StarBorderOutlined />
                </IconButton>
              </div>
              <div className="ad__info">
                <div className="ad__title">{d.name}</div>
                <div className="ad__price">&#8358;&nbsp;{d.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ads;
