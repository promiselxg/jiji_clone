import "./Advert.scss";
import { AddCircle, ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
const Advert = () => {
  return (
    <>
      <div className="advert__container">
        <div className="advert__carousel">
          <div className="image">
            <ArrowBackIos className="sideArrow left" />
            <img
              src="https://assets.jiji.ng/static/img/banners/main_how_to_buy.jpg"
              alt="image_slide"
            />
            <ArrowForwardIos className="sideArrow right" />
          </div>
        </div>
        <div className="post__ad">
          <div className="post__ad__container">
            <div className="add">
              <h2>Got something to sell?</h2>
              <AddCircle />
              <h2>Post an advert for free!</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advert;
