import React from "react";

export default function Resume() {
  return (
    <div className="container-fluid my-16">
      <h4 className="heading text-center">Resume</h4>
      <h2 className="text-center mb-12">My Credentials</h2>
      <p className="text-center">
        Here are detailed information about my credentials and my current and
        past work experience.
      </p>
      <div id="experience">
        <h3 className="heading text-center mb-4">Work Experience</h3>
        <div className="experience-holder">
          <div className="exp-item container">
            <div className="exp-left">
              <h4>Frontend Developer</h4>
              <p>May 2019-present</p>
            </div>
            <div className="exp-middle">
              <img src="images/bi_briefcase.png" />
            </div>
            <div className="exp-right">
              <h4>SELF TAUGHT</h4>
              <div className="line mb-4"></div>
              <p>
                I ventured into the land of Software development shortly after
                graduating from the University. I've used alot of online
                resources and hands on projects to be the front-end developer I
                am today. Some of the resources are: Freecodecamp, Codecademy,
                W3schools, Youtube videos, Udemy Courses etc.
              </p>
            </div>
          </div>
          <div className="exp-item container">
            <div className="exp-left">
              <h4>HNGi7 Intern</h4>
              <p>June 2020-August 2020</p>
            </div>
            <div className="exp-middle">
              <img src="images/bi_briefcase.png" />
            </div>
            <div className="exp-right">
              <h4>HNG</h4>
              <div className="line mb-4"></div>
              <p>
                Two months on a rigorous, fast paced and project based
                internship to improve on existing skills and learn more. I built
                several products and was mentored by some really good
                programmers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="experience">
        <h3 className="text-center heading mb-4">Education</h3>
        <div className="experience-holder">
          <div className="exp-item container">
            <div className="exp-left">
              <h4>Bachelor Degree</h4>
              <p>September 2013-October 2018</p>
            </div>
            <div className="exp-middle">
              <img src="images/fa-solid_graduation-cap.png" />
            </div>
            <div className="exp-right">
              <h4>University of Benin.</h4>
              <div className="line mb-4"></div>
              <p>Bachelor in Engineering (B.Eng) Petroleum Engineering.</p>
            </div>
          </div>
          <div className="exp-item container">
            <div className="exp-left">
              <h4>Responsive Web Design</h4>
              <p>May 2019</p>
            </div>
            <div className="exp-middle">
              <img src="images/fa-solid_graduation-cap.png" />
            </div>
            <div className="exp-right">
              <h4>FreeCodeCamp.org</h4>
              <div className="line mb-4"></div>
              <p>
                You can view the certificate{" "}
                <a
                  target="blank"
                  href="https://www.freecodecamp.org/certification/fcce0659087-335e-4c7f-bf86-40a387137078/responsive-web-design"
                >
                  here.
                </a>{" "}
                I learnt the basics to intermediate Responsive Web Design
              </p>
            </div>
          </div>
          <div className="exp-item container">
            <div className="exp-left">
              <h4>Javascript Data Structures and Algorithms</h4>
              <p>April 2020</p>
            </div>
            <div className="exp-middle">
              <img src="images/fa-solid_graduation-cap.png" />
            </div>
            <div className="exp-right">
              <h4>FreeCodeCamp.org</h4>
              <div className="line mb-4"></div>
              <p>
                I got the Javascript Data Structure and Algorithms certificate.
                Learnt basic to some advanced Javascript concepts. You can view
                this Certificate{" "}
                <a
                  target="blank"
                  href="https://www.freecodecamp.org/certification/fcce0659087-335e-4c7f-bf86-40a387137078/javascript-algorithms-and-data-structures"
                >
                  here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
