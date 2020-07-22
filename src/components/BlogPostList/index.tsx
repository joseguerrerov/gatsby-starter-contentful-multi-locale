import React from 'react';
import styled from 'styled-components';
import { BlogPostListFragment } from '../../../gatsby-graphql';
import { BaseContainer } from '../../styles/BaseComponents';
import BlogPostCard from '../BlogPostCard';
import { useI18 } from '../../hooks/i18n';

interface IBlogPostListProps {
  posts: BlogPostListFragment['blogPostList']['nodes'];
  locale: string;
}

const BlogPostList: React.FC<IBlogPostListProps> = ({ posts, locale }) => {
  const { createLocalizedBlogPostPathname } = useI18({
    currentLocale: locale,
  });
  return (
    <BaseContainer>
      <Container>
        {posts.map((post) => (
          <BlogPostCard
            to={createLocalizedBlogPostPathname(post.slug as string)}
            post={post}
            key={post.id}
          />
        ))}
      </Container>
    </BaseContainer>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr 1fr 1fr);
  padding-top: 4rem;
  gap: 2rem;
`;

export default BlogPostList;
