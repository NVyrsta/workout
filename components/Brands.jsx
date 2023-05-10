import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import brands from '@/assets/brands';
import 'swiper/css';
import 'swiper/css/navigation';

export default () => {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Set 1 slide per view for mobile
      } else if (window.innerWidth < 992) {
        setSlidesPerView(2); // Set 2 slides per view for tablet
      } else {
        setSlidesPerView(4); // Set 4 slides per view for desktop
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section className="brands container section">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={slidesPerView}
      >
        {brands.map((slide) => (
          <SwiperSlide key={slide.src}>
            <img src={slide.src} alt="slide.src" className="brands__img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
