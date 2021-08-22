import "./HeaderBanner.scss";
import { Container } from "@material-ui/core";
import { Search, LocationOn } from "@material-ui/icons";

const HeaderBanner = () => {
  return (
    <>
      <div className="header__banner">
        <Container className="container">
          <div className="header__banner__left">
            <img
              src="https://assets.jiji.ng/static/img/main-page/man.png"
              alt="man"
            />
          </div>
          <div className="header__banner__search">
            <div className="title">
              <h2>
                Find anything in{" "}
                <span>
                  <LocationOn />
                  <h2>All Nigeria</h2>
                </span>
              </h2>
            </div>
            <div className="search">
              <input type="text" placeholder="I am looking for..." />
              <Search className="search__icon" />
            </div>
          </div>
          <div className="header__banner__right">
            <img
              src="https://assets.jiji.ng/static/img/main-page/girls.png"
              alt="ladies"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeaderBanner;
