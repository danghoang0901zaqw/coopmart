import { useEffect, useState } from "react";
import "./Header.scss";

import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Logo from "../../assets/images/eco-logo.png";
import UserIcon from "../../assets/images/user-icon.png";
import { selectQuantiy } from "../../redux/slices/cartSlice";
import { useAuth } from "../../hooks";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/shop",
    display: "Shop",
  },
  {
    path: "/cart",
    display: "Cart",
  },
];
const Header = () => {
  const totalQuantity=useSelector(selectQuantiy)
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleMenu,setToggleMenu]=useState(false)
  const navigate=useNavigate()
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);
  return (
    <header className={`header ${isScrolled ? "sticky__header" : ""}`}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img alt="" src={Logo} className="" />
              <div>
                <h1>Coopmart</h1>
              </div>
            </div>
            <div className={`navigation ${toggleMenu ? 'navigation__active':''}`}>
              <ul className="menu">
                {nav__links?.map((nav, idx) => (
                  <li key={idx} className="nav__item">
                    <NavLink
                      to={nav.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {nav.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="bagde">0</span>
              </span>
              <span className="cart__icon" onClick={()=>navigate('/cart')}>
                <i className="ri-shopping-bag-line"></i>
                <span className="bagde">{totalQuantity}</span>
              </span>
              <span>
                <img alt="" className="" src={UserIcon} />
              </span>
            <div className="mobile__menu" >
              <span onClick={()=>setToggleMenu(!toggleMenu)}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
