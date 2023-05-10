import React from 'react';

const Benefits = () => {
  return (
    <section className="benefits container">
      <div className="benefits__content wrapper">
        <h2 className="benefits__title">Why Choose Us.</h2>
        <h3 className="benefits__subtitle">
          Keep fit, follow a healthy lifestyle with us!
        </h3>

        <div className="benefits__cards">
          <div className="benefits__card">
            <span className="benefits__icon"></span>
            <h4 className="benefits__card-title">Free Shipping Over $90</h4>
            <p className="benefits__card-desc">
              Get advantage of our free worldwide shipping on all orders over
              $90.
            </p>
          </div>

          <div className="benefits__card">
            <span className="benefits__icon"></span>
            <h4 className="benefits__card-title">Easy 30-Day Return</h4>
            <p className="benefits__card-desc">
              If the item does not suit you, please send it back to us within 30
              days.
            </p>
          </div>
          
          <div className="benefits__card">
            <span className="benefits__icon"></span>
            <h4 className="benefits__card-title">ECO MATERIALS</h4>
            <p className="benefits__card-desc">
              All items are made with at least 30% recycled materials and zero
              virgin polyester.
            </p>
          </div>

          <div className="benefits__card">
            <span className="benefits__icon"></span>
            <h4 className="benefits__card-title">20 PAYMENT METHODS</h4>
            <p className="benefits__card-desc">
              Pay for your orders with credit cards, PayPal, AliPay, and other
              payment methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;