import "./Footer.scss";

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
          <div className="footer__">
            <h3>About us</h3>
            <span>About Jiji</span>
            <span>We are hiring!</span>
            <span>Terms &amp; Conditions</span>
            <span>Privacy Policy</span>
            <span>Billing Policy</span>
            <span>Cookie policy</span>
          </div>
          <div className="footer__">
            <h3>About us</h3>
            <span>About Jiji</span>
            <span>We are hiring!</span>
            <span>Terms &amp; Conditions</span>
            <span>Privacy Policy</span>
            <span>Billing Policy</span>
            <span>Cookie policy</span>
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
            <span>our blog</span>
            <span>jiji on FB</span>
            <span>our instagram</span>
            <span>our facebook</span>
            <span>our twitter</span>
          </div>
          <div className="footer__">
            <h3>hot links</h3>
            <span>brand</span>
            <span>jiji sellers</span>
            <span>regions</span>
            <span>jiji africa</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
