import React, { useEffect, useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo2 from '../../assets/logo3.png';
import menu_close from '../../assets/menu_close.svg';
import menu_open from '../../assets/menu_open.svg';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef();
  const navbarRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  }

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (scrollDirection === "up" && lastScrollY > 50) {
      navbarRef.current.classList.add('navbar-scrolled-up');
    } else {
      navbarRef.current.classList.remove('navbar-scrolled-up');
    }
  }, [scrollDirection, lastScrollY]);

  return (
    <div ref={navbarRef} className='navbar'>
      <img src={logo2} alt="logo" className='navbar-logo' />
      <img src={menu_open} onClick={openMenu} alt="open menu" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="close menu" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#timeline'><p onClick={() => setMenu("timeline")}>Education</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
      </ul>
    </div>
  )
}

export default Navbar;
  