import React from "react";

const ReservaHeroSection = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13659.81072887819!2d-64.4520141!3d-31.1388288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b107f754f22dba9!2sC%C3%B3rdoba%20Gilwell%20Park!5e0!3m2!1ses!2sar!4v1631811330728!5m2!1ses!2sar" width="600" height="537" style={{border: "0",}} allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservaHeroSection;