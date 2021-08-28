import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__wrapper">
          <img
            src="https://assets.jiji.ng/static/img/footer-nigeria.svg"
            alt="footer_image"
          />
        </div>
        <div className="footer__content">
          <div className="wrapper">
            <div className="footer__">
              <h3>About us</h3>
              <Link to="/">About Jiji</Link>
              <Link to="/">We are hiring!</Link>
              <Link to="/">Terms &amp; Conditions</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Billing Policy</Link>
              <Link to="/">Cookie policy</Link>
            </div>
            <div className="footer__">
              <h3>support</h3>
              <Link to="/">support@jiji.ng</Link>
              <Link to="/">safety tips</Link>
              <Link to="/">contact us</Link>
              <Link to="/">FAQ</Link>
            </div>
            <div className="footer__">
              <h3>our apps</h3>
              <img
                src="https://assets.jiji.ng/static/img/single-images/ios.svg"
                alt="jiji_ios"
              />
              <img
                src="https://assets.jiji.ng/static/img/single-images/android.svg"
                alt="jiji_andriod"
              />
            </div>
            <div className="footer__">
              <h3>our resources</h3>
              <Link to="/">our blog</Link>
              <Link to="/">jiji on FB</Link>
              <Link to="/">our instagram</Link>
              <Link to="/">our facebook</Link>
              <Link to="/">our twitter</Link>
            </div>
            <div className="footer__">
              <h3>hot links</h3>
              <Link to="/">brand</Link>
              <Link to="/">jiji sellers</Link>
              <Link to="/">regions</Link>
              <Link to="/jiji-africa">jiji africa</Link>
            </div>
          </div>
          <div className="footer__copyright">
            <h3>&copy; 2021 Jiji.ng</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
