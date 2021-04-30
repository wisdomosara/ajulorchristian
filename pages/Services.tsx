export default function Services() {
  return (
    <div id="services" className=" mt-5">
      <div className="container mb-16 px-4 pt-3">
        <h4 className="text-center heading">Services</h4>
        <h2 className="text-center">What Can I Do For You?</h2>
        <p className="text-center">SKILLS AND OFFER.</p>
      </div>
      <div className="container xl:px-24">
        <div className="flex flex-wrap justify-around">
          <div className="services-items shadow ">
            <img src="images/carbon_earth.png" className="mb-4 mt-2"></img>
            <h4 className="mb-2">WEB DEVELOPMENT</h4>
            <div className="line mb-4"></div>
            <p className="text-center">
              A very professional front-end web developer with enthusiasm for
              Full Stack Web Development.
            </p>
          </div>
          <div className="services-items shadow ">
            <img src="images/bx_bx-image.png" className="mb-4 mt-2"></img>
            <h4 className="mb-2">PIXEL PERFECT</h4>
            <div className="line mb-4"></div>
            <p className="text-center">
              All my works are pixel perfect and they match design with 100%
              conversion.
            </p>
          </div>
          <div className="services-items shadow ">
            <img src="images/bi_toggles.png" className="mb-4 mt-2"></img>
            <h4 className="mb-2">RESPONSIVENESS</h4>
            <div className="line mb-4"></div>
            <p className="text-center">
              All my works are responsive on all screensizes from small to extra
              large screensizes.
            </p>
          </div>
          <div
            className="services-items shadow "
            data-wow-duration="0.8"
            data-wow-delay="0.3s"
          >
            <img src="images/bi_window.png" className="mb-4 mt-2"></img>
            <h4 className="mb-2">REACTJS</h4>
            <div className="line mb-4"></div>
            <p className="text-center">
              I also come with sound knowledge and experience in Reactjs and its
              important plugins.
            </p>
          </div>
          <div
            className="services-items shadow "
            data-wow-duration="0.8"
            data-wow-delay="0.3s"
          >
            <img src="images/bx_bx-image.png" className="mb-4 mt-2"></img>
            <h4 className="mb-2">MORE THAN DESIGN</h4>
            <div className="line mb-4"></div>
            <p className="text-center">
              I also don't just do the design part of front end, I develop using
              Javascript, Jquery, APIs and more.
            </p>
          </div>
          <div
            className="services-items shadow "
            data-wow-duration="0.8"
            data-wow-delay="0.3s"
          >
            <img src="images/Group.png" className="mb-4 mt-2"></img>
            <h4 className="mb-2">LEARNING CULTURE</h4>
            <div className="line mb-4"></div>
            <p className="text-center">
              I never settle for less. I'm always looking to learn new
              technologies and quickly too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
