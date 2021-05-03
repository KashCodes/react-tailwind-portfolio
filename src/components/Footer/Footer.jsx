import React from "react";

import "./Footer.styles.css";

const Footer = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">
        © KASHAY ARBELO &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
