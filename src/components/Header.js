// import React from "react";
import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    const navItems = document.querySelectorAll('.navbar ul li a');

    navItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.click();
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      navItems.forEach(item => {
        item.removeEventListener('mouseenter', () => {
          item.click();
        });
      });
    };
  }, []);
  return (
    <header className="Header">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;