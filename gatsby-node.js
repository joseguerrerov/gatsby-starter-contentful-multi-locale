/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
/* eslint-disable @typescript-eslint/no-var-requires */

const { resolve } = require('path');

const templates = {
  generic: resolve('./src/templates/Generic.template.tsx'),
  blog: resolve('./src/templates/Blog.template.tsx'),
  blogPost: resolve('./src/templates/BlogPost.template.tsx'),
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Query all the locales available for the Contentful Space
  const {
    data: { allContentfulLocale },
  } = await graphql(`
    query {
      allContentfulLocale {
        totalCount
        nodes {
          code
          default
        }
      }
    }
  `);

  const locales = allContentfulLocale.nodes;
  // Get Default locale
  const defaultLocale = locales.find((locale) => locale.default);
  const resolvePathnameLocale = (nodeLocale) =>
    nodeLocale === defaultLocale.code ? '' : `/${nodeLocale}`;

  // Query all the pages available for the Contentful Space
  const {
    data: { allContentfulPage },
  } = await graphql(`
    query {
      allContentfulPage {
        totalCount
        nodes {
          id
          node_locale
          path
          slug
          genericPage
        }
      }
    }
  `);

  const pages = allContentfulPage.nodes;
  // Generate Pages
  pages.map((page) => {
    // Check if page has custom template
    const component = page.genericPage
      ? templates.generic
      : templates[page.slug];
    // Create Page
    createPage({
      component,
      path: `${resolvePathnameLocale(page.node_locale)}${page.path}`,
      context: { locale: page.node_locale, id: page.id },
    });
  });

  // Query all the blog posts
  const {
    data: { allContentfulBlogPost },
  } = await graphql(`
    query {
      allContentfulBlogPost {
        totalCount
        nodes {
          id
          slug
          node_locale
        }
      }
    }
  `);

  const blogPosts = allContentfulBlogPost.nodes;
  blogPosts.map((post) => {
    createPage({
      component: templates.blogPost,
      path: `${resolvePathnameLocale(post.node_locale)}/blog/${post.slug}`,
      context: { locale: post.node_locale, id: post.id },
    });
  });
};
