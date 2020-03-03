import React from "react";
import "./Home.css";
import Typist from "react-typist";
import Particles from "react-particles-js";

class Home extends React.Component {
  render() {
    return (
      <Typist className="home-container">
        <Particles
          className="particles-js"
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 1500
                }
              },

              line_linked: {
                enable: false,
                opacity: 0.02
              },
              move: {
                direction: "right",
                speed: 0.05
              },
              size: {
                value: 1
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05
                }
              }
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push"
                }
              },
              modes: {
                push: {
                  particles_nb: 1
                }
              }
            },
            retina_detect: true
          }}
        />
        <h1 className="home-header">
          Hi. My name is <span class="pink">Jakub Smuszko</span>. <br />
          I'm a Web Developer.
        </h1>
      </Typist>
    );
  }
}

export default Home;
