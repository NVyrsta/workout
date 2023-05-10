import React from 'react';
import PostItem from './PostItem';

const Blog = ({ posts }) => {
  if (!posts.length) {
    return <div>Loading...</div>;
  }
  return (
    <section className="blog section container">
      <div className="blog__content wrapper">
        <h2 className="blog__title section-title">
          BLOG<span>.</span>
        </h2>
        <h3 className="blog__subtitle">
          Read the latest articles from our experts.
        </h3>
        <div className="blog__posts">
          <PostItem posts={posts} />
          {/* {posts.map((post) => (
            <article className="blog__post">
              <img src={post.img} alt="" className="blog__post-img" />
              <h4 className="blog__post-title">{post.title}</h4>
              <span>{post.date}</span>
              <p className="blog__post-desc">{post.desc[0]}</p>
            </article>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
