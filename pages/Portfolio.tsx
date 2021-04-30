import React from "react";

export default function Portfolio() {
  return (
    <div className="container my-16">
      <h4 className="text-center mb-4 heading">Portfolio</h4>
      <h1 className="text-center mb-5">Check Out Some of My Works</h1>
      <div className=" mb-5">
        <div className="flex flex-col md:flex-row mb-12">
          <div className="w-full md:w-1/2 md:order-1">
            <a href="https://wisdommasterlanding.herokuapp.com" target="blank">
              <div className="portfolio portfolio1 shadow">
                <img src="images/landingpage__2_.jpg" width="90%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text md:w-1/2 md:order-12 md:ml-12"
            data-wow-duration="0.7s"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">BeSilent</h4>
            <h5 className="mb-3">WEB DEVELOPMENT | PRODUCT LANDING PAGE</h5>
            <p>
              I did the BeSilent landing page as part of a project in the
              internship. I was paired with a wonderful designer who came up
              with the Design for the page. The landing page has an email
              capturing system that links to the database. This was my first
              dive into backend development.
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2 md:order-12"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://app.fundmylaptop.com/campaigns" target="blank">
              <div className="portfolio portfolio2 shadow">
                <img src="images/fundmylaptop.jpg" width="90%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text text-md-right md:w-1/2 md:order-1 mr-12"
            data-wow-duration="0.7s"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">Fund My Laptop</h4>
            <h5 className="mb-3">WEB DEVELOPMENT</h5>
            <p>
              I was in the team the did the FundMyLaptop project. It is a
              Reactjs project. We used advanced technologies such as
              React-Redux, React-Router etc. My contribution can be seen once
              you log in to the site and click on FUND. The component i did to
              make get request to the campaigns API endpoint and consume it on
              the component. Also on Admin view, a different layout is rendered.
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://wisdomosara.github.io/countries" target="blank">
              <div className="portfolio portfolio3 shadow">
                <img src="images/countries.jpg" width="90%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text md:w-1/2 wow fadeInUp md:ml-12"
            data-wow-duration="0.7"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">COUNTRIES</h4>
            <h5 className="mb-3">WEB DEVELOPMENT | EDUCATION</h5>
            <p>
              Based off on a challenge on Front-End Mentors. I finished the
              project which I employed my knowledge of RESTFul APIs and made
              several get requests to the countries RESTFul api and populated
              the page with the data gotten from it.
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2 md:order-12 wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://wisdomosara.github.io/slide" target="blank">
              <div className="portfolio portfolio4 shadow">
                <img src="images/slide.jpg" width="90%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text text-md-right md:w-1/2 md:order-1 wow fadeInUp mr-12"
            data-wow-duration="0.6s"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">Global Adventure Slide</h4>
            <h5 className="mb-3">WEB DEVELOPMENT | REACTJS</h5>
            <p>
              A personal project based on a design from a friend. Using the
              power of Reactjs state management, I created this smooth
              slideshow. It shows a sneak peek of the show before loading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
