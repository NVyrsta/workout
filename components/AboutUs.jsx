import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="about-us container section">
      <div className="about-us__image"></div>
      <div className="about-us__content">
        <h2 className="about-us__title section-title">About us<span>.</span></h2>
        <p className="about-us__desc">
          Workout is an American fitness store created by fitness geeks for
          those who love sport and try to keep fit.
        </p>
        <p className="about-us__desc">
          At Workout, we know that great results do not come from standing
          still. We all need to move, push boundaries, and achieve better
          results every day. The mission of our shop is to support you in this.
        </p>
        <p className="about-us__desc">
          We're sure that everyday fitness can change your lives and bodies
          forever. And we keep selling comfortable and high-tech clothes and
          shoes for your outstanding results.
        </p>
        <div className="about-us__social">
          <a href="#" className="about-us__social-link">
            <FaFacebookF style={{ fill: 'red' }}/>
          </a>
          <a href="#" className="about-us__social-link">
            <AiOutlineInstagram style={{ fill: 'red' }} />
          </a>
          <a href="#" className="about-us__social-link">
            <FaYoutube style={{ fill: 'red' }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;