import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960); // Track screen size

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const handleMouseEnter = (menu) => {
    if (!isMobile) {
      setDropdown(menu); // Keep hover behavior on larger screens
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setDropdown(null); // Close dropdown on hover leave for larger screens
    }
  };

  useEffect(() => {
    // Handle screen resize to toggle mobile view behavior
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <img src="/public/images/tacomatntt.png" alt="Logo" className="navbar-logo" />

      <Link to="/" className="navbar-title" onClick={closeMobileMenu}>
        Đoàn Têrêsa Hài Đồng Giêsu
      </Link>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>HOME</Link>
        </li>

        <li className="nav-item">
          <Link to="https://docs.google.com/document/d/e/2PACX-1vRuuTHlGCk672ZziSmycd2FpboE_OuT60AF39A0b36Ox_zloohwRiqHh8P5nNLjv-CB_NGRTjEij3RW/pub" className="nav-links" onClick={closeMobileMenu}>PHOTOS</Link>
        </li>

        <li
          className="nav-item dropdown"
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="nav-links" onClick={() => toggleDropdown('about')}>
            ABOUT ▾
          </span>
          {dropdown === 'about' && (
            <ul className="dropdown-menu">
              <Link to="/overview" className="dropdown-link" onClick={closeMobileMenu}>
                ABOUT US
              </Link>
              <Link to="/team" className="dropdown-link" onClick={closeMobileMenu}>
                TEAM
              </Link>
            </ul>
          )}
        </li>

        <li
          className="nav-item dropdown"
          onMouseEnter={() => handleMouseEnter('resources')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="nav-links" onClick={() => toggleDropdown('resources')}>
            RESOURCES ▾
          </span>
          {dropdown === 'resources' && (
            <ul className="dropdown-menu">
              <li>
                <a href="https://veym.net/resources/officialsongs" className="dropdown-link" onClick={closeMobileMenu}>
                  OFFICIAL SONGS
                </a>
              </li>
              <li>
                <a href="https://veym.net/resources/prayers" className="dropdown-link" onClick={closeMobileMenu}>
                  PRAYERS
                </a>
              </li>
              <li>
                <a href="https://veym.net/resources/weeklygospel" className="dropdown-link" onClick={closeMobileMenu}>
                  WEEKLY GOSPEL
                </a>
              </li>
              <li>
                <a href="https://veym.net/resources/trainingresources" className="dropdown-link" onClick={closeMobileMenu}>
                  TRAINING RESOURCES
                </a>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
            EVENTS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
            CONTACT
          </Link>
        </li>
        <li className="nav-item">
          <a href="https://veym.net/" className="nav-links" onClick={closeMobileMenu}>
            VEYM
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
