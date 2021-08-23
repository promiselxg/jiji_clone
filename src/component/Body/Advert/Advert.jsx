import "./Advert.scss";
import { AddCircle } from "@material-ui/icons";
const Advert = () => {
  return (
    <>
      <div className="advert__container">
        <div className="advert__carousel">
          <div className="image">
            <img
              src="https://assets.jiji.ng/static/img/banners/main_how_to_buy.jpg"
              alt="image_slide"
            />
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
