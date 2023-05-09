import Link from 'next/link';
import React from 'react';

const Categories = () => {
  return (
    <section className="categories container">
      <div className="categories__content wrapper">
        <div className="categories__item">
          <Link
            href="/category/new-arrivals"
            className="categories__link"
          ></Link>
          <h2 className="categories__title"> new arrivals</h2>
          <a href="#" className="categories__btn">
            Shop Collection <span>⟶</span>
          </a>
        </div>

        <div className="categories__item">
          <Link
            href="/category/trainers"
            className="categories__link"
          ></Link>
          <h2 className="categories__title"> trainers</h2>
          <a href="#" className="categories__btn">
            Shop Collection <span>⟶</span>
          </a>
        </div>

        <div className="categories__item">
          <Link
            href="/category/hot-sale"
            className="categories__link"
          ></Link>
          <h2 className="categories__title"> hot sale</h2>
          <a href="#" className="categories__btn">
            Shop Collection <span>⟶</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
