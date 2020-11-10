import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./navbar.styles.scss";
import logo from "../../logo.svg";
const classNames = require("classnames");

export default function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <nav className={classNames("navbar-container", { scrolled: scrolled })}>
      <div className="link-container left">
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
      </div>
      <img src={logo} className="logo" alt="logo" width={150} height={75} />
      <div className="link-container right">
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
      </div>
    </nav>
  );
}