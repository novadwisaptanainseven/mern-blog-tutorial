import React, { Fragment } from "react";
import {
  Logo,
  ICFacebook,
  ICInstagram,
  ICTwitter,
  ICYoutube,
  ICWhatsapp,
} from "../../../assets";
// Style
import "./footer.scss";

const Icon = (props) => {
  return (
    <div className="icon-wrapper">
      <img src={props.src} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="logo-footer">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="social-media-footer">
          <Icon src={ICInstagram} />
          <Icon src={ICFacebook} />
          <Icon src={ICTwitter} />
          <Icon src={ICYoutube} />
          <Icon src={ICWhatsapp} />
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2020</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
