import React from "react";
import "./footer.scss";
import GithubLogo from "../../../assets/Octocat.jpg";

function Footer() {
  return (
    <div className="footer">
      <p>© by Kelompok 30</p>
      <img src={GithubLogo} className="img-logo" alt="logo" />
    </div>
  );
}

export default Footer;
