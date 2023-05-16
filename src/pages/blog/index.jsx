import React from 'react';
import Layout from '../../../components/Layout';
import Blog from '../../../components/Blog';
import posts from '@/assets/posts';

const AboutPage = () => {
  return (
    <Layout>
      <Blog posts={posts} />
    </Layout>
  );
};

export default AboutPage;
