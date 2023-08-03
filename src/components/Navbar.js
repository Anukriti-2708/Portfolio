import "./Navbar.css"
import { Link } from 'react-scroll';
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleClick = () => setClick(!click);

  // Function to handle link clicks and close the navbar
  const handleLinkClick = () => {
    setClick(false);
  };

  // Event listener to update screenSize state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      <a href="/" className="portfolio">
        <h1>Portfolio</h1>
      </a>
      {screenSize <= 1040 ? (
        <>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <Link to="home-wrapper" spy={true} smooth={true} onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="custom-shape-divider-bottom-1690823229" spy={true} smooth={true} onClick={handleLinkClick}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contacts" spy={true} smooth={true} onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1CULxAU7P2YpHDhDy9K2auDQ8q_9eIT9-/view?usp=drive_link" spy={true} smooth={true} >
                Resume
              </a>
            </li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click ? <FaTimes size={20} style={{ color: '#fff' }} /> : <FaBars size={20} style={{ color: '#fff' }} />}
          </div>
        </>) : (
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li><Link to="home-wrapper" spy={true} smooth={true}>Home</Link></li>
          <li><Link to="custom-shape-divider-bottom-1690823229" spy={true} smooth={true}>Projects</Link></li>
            <li><Link to="contacts" spy={true} smooth={true}>Contact</Link></li>
            <li>
              <a href="https://drive.google.com/file/d/1CULxAU7P2YpHDhDy9K2auDQ8q_9eIT9-/view?usp=drive_link" spy={true} smooth={true} >
                Resume
              </a>
            </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar