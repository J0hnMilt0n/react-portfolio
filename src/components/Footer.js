import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="Footer">
      <p>© {currentYear} J0hnMilt0n</p>
    </footer>
  );
}

export default Footer;