import {
  Button,
  Container,
  Modal,
  Divider,
  TextField,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Apple, Facebook } from "@material-ui/icons";
import "./HeaderTop.scss";
const HeaderTop = () => {
  const [registeropen, setRegister] = useState(false);
  const [loginopen, setLogin] = useState(false);
  const [newRegister, setNewRegister] = useState(false);
  const [newLogin, setNewLogin] = useState(false);
  const user = false;

  //  Register / Login button
  const handleOpen = (elm) => {
    if (user === false) {
      if (elm === "register") {
        setRegister(true);
        setLogin(false);
        setNewLogin(false);
        setNewRegister(false);
      } else if (elm === "login") {
        setLogin(true);
        setRegister(false);
        setNewLogin(false);
        setNewRegister(false);
      } else if (elm === "newLogin") {
        setNewRegister(false);
        setLogin(false);
        setRegister(false);
        setNewLogin(true);
      } else {
        setNewLogin(false);
        setNewRegister(true);
        setLogin(false);
        setRegister(false);
      }
    }
  };

  // close button
  const handleClose = (elm) => {
    if (elm !== "register") {
      setNewLogin(false);
      setNewRegister(false);
      setLogin(false);
      setRegister(false);
    }
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
              <Link onClick={() => handleOpen("login")} to="/">
                Sign In
              </Link>
              <span>|</span>
              <Link onClick={() => handleOpen("register")} to="/">
                Registration
              </Link>
            </div>
            <div className="postAd">
              <Button>SELL</Button>
            </div>
          </div>
        </Container>
      </div>

      {/* register */}
      <Modal open={registeropen} onClose={() => handleClose("register")}>
        <div className="modal__container">
          <div className="modal__content">
            <div className="container">
              <span className="clear" onClick={() => handleClose("register")}>
                <Close />
              </span>
              <div>
                <h3>register</h3>
                <Link to="/">
                  <Button className="icon google" startIcon={<Apple />}>
                    Register via Google
                  </Button>
                </Link>
                <Link to="/">
                  <Button className="icon facebook" startIcon={<Facebook />}>
                    Register via Facebook
                  </Button>
                </Link>
                <span className="divider">
                  <Divider className="divid" />
                  <span>or</span>
                </span>
                <Link to="/">
                  <Button
                    className="icon phone"
                    onClick={() => handleOpen("newRegister")}
                  >
                    Register via email or phone
                  </Button>
                </Link>
                <span>
                  Already have an account?{" "}
                  <Link to="/" onClick={() => handleOpen("login")}>
                    Sing In
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* login */}
      <Modal open={loginopen} onClose={() => handleClose("login")}>
        <div className="modal__container">
          <div className="modal__content">
            <div className="container">
              <span className="clear" onClick={() => handleClose("login")}>
                <Close />
              </span>
              <div>
                <h3>Sign In</h3>
                <Link to="/">
                  <Button className="icon google" startIcon={<Apple />}>
                    Login via Google
                  </Button>
                </Link>
                <Link to="/">
                  <Button className="icon facebook" startIcon={<Facebook />}>
                    Login via Facebook
                  </Button>
                </Link>
                <span className="divider">
                  <Divider className="divid" />
                  <span>or</span>
                </span>
                <Link to="/">
                  <Button
                    className="icon phone"
                    onClick={() => handleOpen("newLogin")}
                  >
                    Login via email or phone
                  </Button>
                </Link>
                <span>
                  Don't have an account?{" "}
                  <Link to="/" onClick={() => handleOpen("register")}>
                    Registration
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* login with phone and email */}
      <Modal open={newLogin} onClose={() => handleClose("login")}>
        <div className="modal__container">
          <div className="modal__content">
            <div className="container">
              <span className="clear" onClick={() => handleClose("login")}>
                <Close />
              </span>
              <div>
                <h3>Sign In via email or phone</h3>
                <TextField
                  label="Email or Phone number"
                  variant="outlined"
                  className="input"
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  className="input"
                />
                <span
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "5px",
                    marginBottom: "5px",
                    marginLeft: "-3px",
                    width: "100%",
                  }}
                >
                  <Link to="/" style={{ alignItems: "center !important" }}>
                    Forgot your password
                  </Link>
                </span>
                <Button className="icon phone" disabled>
                  SIGN IN
                </Button>
                <span>
                  Don't have an account?{" "}
                  <Link to="/" onClick={() => handleOpen("login")}>
                    Registration
                  </Link>
                </span>
                <span className="divider">
                  <Divider className="divid" />
                  <span>or</span>
                </span>
                <div className="w-50">
                  <Link to="/">
                    <Button className="icon google" startIcon={<Apple />}>
                      via Google
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button className="icon facebook" startIcon={<Facebook />}>
                      via Facebook
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HeaderTop;
