import React from "react";
import { Button } from "../../atoms";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <p className="logo-app">kelompok 30</p>
      <Button>About</Button>
    </div>
  );
}

export default Header;
