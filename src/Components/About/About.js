import React from "react";
import "./About.css";
import fotocv from "./fotocv.jpg";
import htmllogo from "./html-logo.png";
import csslogo from "./css-logo.svg";
import jslogo from "./js-logo.png";
import reactlogo from "./react-logo.png";
import nodelogo from "./node-logo.png";

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-me">
          <h2>
            <span class="pink">M</span>y name is Jakub Smuszko and I am a
            beginning web developer, currently looking for a possibility of
            growth and learning in a professional environment. My goal is to
            build simple, yet beautiful and functional websites. I am a
            minimalist at heart, a fantasy geek and board games lover.{" "}
          </h2>
        </div>
        <div className="skills">
          <div className="skills-container">
            <h2 className="skills-header">
              {" "}
              <span class="pink">S</span>kills
            </h2>
            <img src={htmllogo} alt="html-logo" width="150px" height="150px" />
            <img src={csslogo} alt="css-logo" width="150px" height="150px" />
            <img src={jslogo} alt="js-logo" width="150px" height="150px" />
            <img
              src={reactlogo}
              alt="react-logo"
              width="150px"
              height="150px"
            />
            <img src={nodelogo} alt="node-logo" width="150px" height="150px" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
