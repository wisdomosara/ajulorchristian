import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="my-16">
      <h4 className="text-center mb-2 heading">About</h4>
      <h1 className="text-center mb-10">Let me Introduce Myself</h1>
      <div className="container">
        <div className="flex flex-col md:flex-row mb-10">
          <div className="w-full md:w-1/2 mb-4 profile-pic md:mr-10">
            <img src="images/Ajulor3.jpg" width="100%"></img>
          </div>
          <div className="w-full about-text md:w-1/2">
            <p>
              I'm a data scientist/Analyst skilled in gathering, cleaning and organizing data for use by technical and non-technical Personnel.
              I have experience using machine learning algorithms to analyze and solve business problems. Applied statistical and algebraic techniques 
              to interpret key points from gathered data. Generated reports of findings to help management with making key decisions.
              Highly organized and proficient using Python, SQL, Power BI, and skilled in machine learning using Scikit-learn and Tensorflow.
              I'm also a Backend engineer using Django. I love learning new things and quickly too and i love to code!.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex">
          <div className="profile w-full  md:w-1/2 mb-2 wow fadeInLeft">
            <div className="skills-text">
              <h3 className="mb-4 text-center md:text-left">PROFILE</h3>
              <p className="mb-2">
                I have a Degree in Petroleum Engineering from the great
                University of Benin. I'm a certified Data Professional (Data Analyst/Scientist) with
                sound knowledge in data analysis and machine learning. I have sound
                knowledge on Scikit learn, tensorflow, EDA, SQL, data visualization, Power BI, 
                Python, Pandas, Matplotlib, NumPy, Django, HTML and CSS.
              </p>
              <p>
                Click{" "}
                <button
                  className="btn w-max"
                  style={{ width: "auto", padding: "5px 10px" }}
                >
                  <Link href="/Portfolio">
                    <a>Here</a>
                  </Link>{" "}
                </button>{" "}
                to view my Portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-text-center">
        <div className="container">
          <div className="button-flex">
            <Link href="/Contact">
              <a>
                <button className="btn1 shadow">HIRE ME</button>
              </a>
            </Link>
            <a href="/Christian's Resume..pdf" target="/blank">
              <button
                className="btn2 shadow wow fadeInRight"
                data-wow-duration="0.5"
                data-wow-delay="0.4s"
              >
                DOWNLOAD CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
