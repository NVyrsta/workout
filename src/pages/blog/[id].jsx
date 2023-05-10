import React from 'react';
import Layout from '../../../components/Layout';
import posts from '@/assets/posts';

const Post = ({ post }) => {
  const { id, img, desc, date, title } = post;

  if (!post) {
    // Обробка випадку, коли post не визначений або недоступний
    return <div>Loading...</div>;
  }
  
  return (
    <Layout>
      <article key={id} className="post container">
        <div className="post__content">
          <img src={img} alt='img' className="post__img" />
          <div className="post__info">
      <span className="post__date">{date}</span>
      <h3 className="post__title section-title">{title}</h3>
      {desc.map(item => (
        <p className="post__desc">{item}</p>
      ))}</div>
</div>
      </article>
    </Layout>
  )
};

export default Post;

export async function getServerSideProps({ params }) {
  // Отримання даних для конкретного посту з параметром `id`
  const { id } = params;

  const post = posts.find(item => item.id === +id);
  console.log(post);
  // Ваш код для отримання даних по `id` (наприклад, з бази даних або зовнішнього API)

  // Приклад тимчасових даних для демонстрації
  // const post = {
  //   id,
  //   img: 'https://example.com/image.jpg',
  //   desc: ['Description 1', 'Description 2'],
  //   date: '2023-05-10',
  //   title: 'Post Title'
  // };

  return {
    props: {
      post
    }
  };
}