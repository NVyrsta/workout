import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import productsFromAPI from '@/assets/products';
import getProductsOnSale from '@/pages/api/getProductsOnSale';

const MidSeasonSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = getProductsOnSale(productsFromAPI);
    setProducts(data);
  }, []);

  return (
    <section className="mid-season-sale section container">
      <h2 className="mid-season-sale__title section-title">
        mid-season Sale<span>.</span>
      </h2>
      <h3 className="mid-season-sale__subtitle">
        Shop clothes and trainers that are chosen by thousands of our clients.
        Click on the image to see the product details and click Add to Cart to
        make the purchase. We are committed to give you the best buying
        experience!
      </h3>
      
      <div className="mid-season-sale__products">
        {products.map(({ id, title, image, price }) => (
          <div className="mid-season-sale__product">
            <Link href={`/sale/${id}`} className="mid-season-sale__link">
              <img src={image} alt={title} />
            </Link>
            <p className="mid-season-sale__product-title">{title}</p>
            <p className="mid-season-sale__price">$ {price.toFixed(2)}</p>
            <button className="mid-season-sale__btn add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MidSeasonSale;
