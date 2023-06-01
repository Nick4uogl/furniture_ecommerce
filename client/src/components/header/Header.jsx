import React, { useState } from "react";
import logo from "../../img/logo.png";
import phone from "../../img/icons/phone.svg";
import basket from "../../img/icons/basket.svg";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../CartContext";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const { countItems } = useContext(CartContext);

  const handleClick = () => {
    setIsActive((isActive) => {
      return !isActive;
    });
  };

  React.useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isActive]);

  const handleOverlay = () => {
    document.body.style.overflow = "visible";
    if (isActive) {
      setIsActive((isActive) => !isActive);
    }
  };

  return (
    <div className="header">
      <div className="header__container">
        <NavLink to={"/furniture"} className="header__logo logo">
          <img src={logo} alt="" />
          <p className="logo__title">
            <span>Меблі</span> від дяді Жори
          </p>
        </NavLink>
        <div className={isActive ? "menu-overlay" : ""} onClick={handleOverlay}>
          <ul className={`menu ${isActive ? "menu-active" : ""}`}>
            <li className="menu__item menu__item--active">
              <NavLink
                to={"/furniture"}
                className={({ isActive, isPending }) =>
                  isActive ? "active-item" : isPending ? "pending" : ""
                }
              >
                Головна
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to={"/about"}
                className={({ isActive, isPending }) =>
                  isActive ? "active-item" : isPending ? "pending" : ""
                }
              >
                Про нас
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to={"/products"}
                className={({ isActive, isPending }) =>
                  isActive ? "active-item" : isPending ? "pending" : ""
                }
              >
                Товари
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header__actions">
          <a href="tel:+380960981783" className="header__phone">
            <img src={phone} alt="" />
            <p>+380960981783</p>
          </a>
          <NavLink to={"furniture/cart"} className="header__basket">
            <img src={basket} alt="" />
            {countItems !== 0 && (
              <span className="header__cart-count">{countItems}</span>
            )}
          </NavLink>
        </div>
        {!isActive ? (
          <div className="burger" onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <div className="burger-close" onClick={handleClick}>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
