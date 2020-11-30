import React from "react";
import { Card } from "../../components/";
import "./about.scss";
import MulaziPhoto from "../../assets/mulazi.jpg";
import AfrizalPhoto from "../../assets/afrizal.jpg";

const About = () => {
  return (
    <div className="about-wrapper">
      <Card nama="Afrizal Bagas" nim="21120117130075" photo={AfrizalPhoto} />
      <Card nama="Mulazi" nim="21120117120013" photo={MulaziPhoto} />
    </div>
  );
};

export default About;
