import React from 'react';

const Comfort = () => {
  return (
    <section className="comfort section container">
      <div></div>
      <div className="comfort__content">
        <h3 className="comfort__subtitle">100% ORIGINAL BRANDS</h3>
        <h2 className="comfort__title">KEEP FIT WITH COMFORT.</h2>
        <div className="comfort__benefits">
          <span className="comfort__benefit">Top brands</span>
          <span className="comfort__benefit">Delivery with DHL</span>
          <span className="comfort__benefit">Easy returns</span>
        </div>
        <p className="comfort__desc">
          Workout offers fitness clothing and footwear for those who want to
          change their lives and bodies for better. We work only with the best
          sport brands to ensure that your training is really effective and
          comfortable.
        </p>
        <a href="#" role="button" className="comfort__btn">
          Learm More <span>⟶</span>
        </a>
      </div>
    </section>
  );
};

export default Comfort;