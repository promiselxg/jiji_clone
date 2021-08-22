import { Button, Container } from "@material-ui/core";
import "./HeaderTop.scss";
const HeaderTop = () => {
  return (
    <>
      <div className="header__top">
        <Container className="container">
          <div className="header__top__left">
            <img
              src="https://assets.jiji.ng/static/img/logos/nigeria.svg"
              alt="jiji logo"
            />
          </div>
          <div className="header__top__center">
            <h1>sell faster, buy smarter</h1>
          </div>
          <div className="header__top__right">
            <div className="nav">
              <span>Sign In</span>
              <span>|</span>
              <span>Registration</span>
            </div>
            <div className="postAd">
              <Button>SELL</Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeaderTop;
