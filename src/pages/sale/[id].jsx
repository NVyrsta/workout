import React from 'react';
import Layout from '../../../components/Layout';
import productsFromAPI from '@/assets/products';

const Product = ({ product }) => {
  const { id, image, desc, title } = product;

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <article key={id} className="post container">
        <div className="post__content">
          <img src={image} alt="img" className="post__img" />
          <div className="post__info">
            <h3 className="post__title section-title">{title}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Product;

export async function getServerSideProps({ params }) {
  const { id } = params;

  const product = productsFromAPI.find((item) => item.id === +id);

  return {
    props: {
      product
    }
  };
}
