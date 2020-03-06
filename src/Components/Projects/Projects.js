import React from "react";
import "./Projects.css";
import portfoliocover from "./portfolio-cover.PNG";
import pizzeriacover from "./pizzeria-cover.PNG";
import doglifycover from "./doglify-cover.PNG";
import gitmark from "./GitHub-Mark-Light-64px.png";
import liveprev from "./liveprev.png";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects-container">
        <h1 className="projects-header">
          <span class="pink">P</span>rojects
        </h1>
        <h2>
          Some of the projects I have worked on so far. You can find more on my
          <a href="https://github.com/jakubsmuszko" target="_blank">
            {" "}
            GitHub
          </a>{" "}
          profile.
        </h2>
        <div class="card-zone">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={portfoliocover}
                  width="450px"
                  height="300px"
                  alt="Avatar"
                />
              </div>
              <div class="flip-card-back">
                <h1>My portfolio</h1>
                <p>This portfolio website created using React.js.</p>
                <div>
                  <a
                    href="https://github.com/jakubsmuszko/portfolio"
                    target="_blank"
                  >
                    <img src={gitmark} class="icons" alt="placeholder" />
                  </a>
                  <a
                    href="http://jakubsmuszko.github.io/portfolio"
                    target="_blank"
                  >
                    <img src={liveprev} class="icons" alt="placeholder" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={pizzeriacover}
                  width="450px"
                  height="300px"
                  alt="Avatar"
                />
              </div>
              <div class="flip-card-back">
                <h1>Pizzeria Pizzerino</h1>
                <p>
                  A simple restaurant landing page, created with only HTML and
                  CSS.
                </p>
                <div>
                  <a
                    href="https://github.com/jakubsmuszko/pizzeria"
                    target="_blank"
                  >
                    <img src={gitmark} class="icons" alt="placeholder" />
                  </a>
                  <a
                    href="https://jakubsmuszko.github.io/pizzeria/"
                    target="_blank"
                  >
                    <img src={liveprev} class="icons" alt="placeholder" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={doglifycover}
                  width="450px"
                  height="300px"
                  alt="Avatar"
                />
              </div>
              <div class="flip-card-back">
                <h1>Doglify</h1>
                <p>
                  An app, which will replace a face with a random picture of my
                  dogs. I'm not sorry. Created using React.js, as well as a
                  database created with PostgreSQL.
                </p>
                <div>
                  <a
                    href="https://jakubsmuszko.github.io/doglify/"
                    target="_blank"
                  >
                    <img src={gitmark} class="icons" alt="placeholder" />
                  </a>
                  <a
                    href="https://github.com/jakubsmuszko/doglify"
                    target="_blank"
                  >
                    <img src={liveprev} class="icons" alt="placeholder" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
