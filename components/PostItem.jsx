import Link from 'next/link';
import React from 'react';

const PostItem = ({ posts }) => {
  return posts.map((post) => {
    const { id, img, title, date, desc } = post;

    return (
      <article className="post-item" key={id}>
        <Link href={`/blog/${id}`} className="post-item__link">Link</Link>
        <img src={`${img}`} alt={`post img ${id}`} />
        <span className="post-item__date">{date}</span>
        <h3 className="post-item__title">{title}</h3>
        <div className="post-item__desc">
          {desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </article>
    );
  });
};

export default PostItem;
