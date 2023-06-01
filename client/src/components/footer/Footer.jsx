import React from "react";
import "./Footer.scss";
import logo from "../../img/logo.png";
import instagram from "../../img/icons/instagram.svg";
import facebook from "../../img/icons/facebook.svg";
import telegram from "../../img/icons/telegram.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <a href="/" className="footer-logo">
          <img src={logo} alt="logo" />
          <p className="footer-logo__title">
            <span>Меблі</span> від дяді Жори
          </p>
        </a>
        <ul className="menu-footer">
          <li className="menu-footer__item">
            <a href="/#">Головна</a>
          </li>
          <li className="menu-footer__item">
            <a href="/#">Про нас</a>
          </li>
          <li className="menu-footer__item">
            <a href="/#">Товари</a>
          </li>
        </ul>
        <ul className="footer-social">
          <li className="footer-social__item">
            <a href="/#">
              <img src={instagram} alt="Link to instagram" />
              <span>Instagram</span>
            </a>
          </li>
          <li className="footer-social__item">
            <a href="/#">
              <img src={telegram} alt="Link to telegram" />
              <span>Telegram</span>
            </a>
          </li>
          <li className="footer-social__item">
            <a href="/#">
              <img
                src={facebook}
                width={28}
                height={28}
                alt="Link to facebook"
              />
              <span>Facebook</span>
            </a>
          </li>
        </ul>
        <div className="footer-info">
          <p>Партизанська 1, с. Берестяне, Волинська область</p>
          <p>+380960981783</p>
          <p>kolianpylupc@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
