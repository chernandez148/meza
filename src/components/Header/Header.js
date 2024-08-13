import React from "react";
import "./Header.css";

function Header({ title, background }) {
  return (
    <div className="Header" style={{ backgroundImage: `url(${background})` }}>
      <h2>{title}</h2>
    </div>
  );
}

export default Header;
