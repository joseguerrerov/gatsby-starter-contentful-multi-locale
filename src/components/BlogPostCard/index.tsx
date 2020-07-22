import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import { BlogPostListFragment } from '../../../gatsby-graphql';

interface IBlogPostListProps {
  post: BlogPostListFragment['blogPostList']['nodes'][0];
  to: string;
}

const BlogPostCard: React.FC<IBlogPostListProps> = ({
  post: { title, description, image },
  to,
}) => (
  <StyledLink to={to}>
    <GatsbyImage fluid={image?.fluid as FluidObject} />
    <h2>{title}</h2>
    <p>{description}</p>
  </StyledLink>
);

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  color: inherit;
  text-decoration: none;
  h2 {
    margin-top: 1rem;
  }
`;

export default BlogPostCard;
