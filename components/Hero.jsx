import React from 'react';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__content wrapper">
        <h4 className="hero__subtitle">ASPIRE TO MORE</h4>
        <h1 className="hero__title">
          new
          <span>collections</span>
          <br />
          by top brands<span>.</span>
        </h1>
        <a href="#" role="button" className="hero__btn">
          Shop Now <span>⟶</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;