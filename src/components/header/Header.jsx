import { useRef, useEffect } from "react";

//import router
import { NavLink } from "react-router-dom";

//importing images
import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/images/user-icon.png";
//import bootstrap components
import { Container, Row } from "reactstrap";
//import from motion
import { motion } from "framer-motion";
//import styles
import "./header.css";

const links = [
  { id: 1, path: "home", display: "Home" },
  { id: 2, path: "shop", display: "Shop" },
  { id: 3, path: "cart", display: "Cart" },
];

const Header = () => {
  const headerRef = useRef(null);
  const toggleRef = useRef(null) ;
   
  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    handleScroll();
    return window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => toggleRef.current.classList.toggle('navbar__active') ;


  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="navbar">
            <div className="navbar__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="navbar__list" ref={toggleRef} onClick={() => handleToggle()}>
              <ul className="navbar__menu">
                {links.map((item) => (
                  <li className="navbar__item" key={item.id}>
                    <NavLink to={item.path}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar__icon">
              <span className="navbar__icon__cart">
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">2</span>
              </span>
              <span className="navbar__icon__favorite">
                <i className="ri-heart-line"></i>
                <span className="badge">2</span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt="user icon"
                />
              </span>
              <div className="navbar__toggle" onClick={() => handleToggle()}>
                <span>
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
