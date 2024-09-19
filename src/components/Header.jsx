import React from "react";
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <div className="site-name">Cine Review</div>
      <div className="login-icon">
        <a href="/login" aria-label="Login">
          <img src="/login-icon.png" alt="Login" />
        </a>
      </div>
    </header>
  );
};

export default Header;
