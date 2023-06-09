import React from 'react';
import Layout from '../../../components/Layout';
import posts from '@/assets/posts';

const Post = ({ post }) => {
  const { id, img, desc, date, title } = post;

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <article key={id} className="post container">
        <div className="post__content">
          <img src={img} alt="img" className="post__img" />
          <div className="post__info">
            <span className="post__date">{date}</span>
            <h3 className="post__title section-title">{title}</h3>
            {desc.map((item) => (
              <p className="post__desc">{item}</p>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;

export async function getServerSideProps({ params }) {
  const { id } = params;

  const post = posts.find((item) => item.id === +id);
  console.log(post);

  return {
    props: {
      post
    }
  };
}
