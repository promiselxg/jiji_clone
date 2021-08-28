import { Button, Container, Modal, Divider } from "@material-ui/core";
import { Apple, Facebook } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderTop.scss";
const HeaderTop = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  const handleOpen = () => {
    if (user === false) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              <Link onClick={handleOpen} to="/">
                Sign In
              </Link>
              <span>|</span>
              <Link onClick={handleOpen} to="/">
                Registration
              </Link>
            </div>
            <div className="postAd">
              <Button>SELL</Button>
            </div>
          </div>
        </Container>
      </div>
      {/* Modal */}
      <Modal open={open} onClick={handleClose}>
        <div className="modal__container">
          <div className="modal__content">
            <div className="container">
              <div>
                <h3>register</h3>
                <Button className="icon google" startIcon={<Apple />}>
                  Register via Google
                </Button>
                <Button className="icon facebook" startIcon={<Facebook />}>
                  Register via Facebook
                </Button>
                <span className="divider">
                  <Divider className="divid" />
                  <span>or</span>
                </span>
                <Button className="icon phone">
                  Register via email or phone
                </Button>
                <span>
                  Already have an account? <Link to="/">sign in</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HeaderTop;
