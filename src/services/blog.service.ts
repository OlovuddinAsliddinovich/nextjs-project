import { request, gql } from "graphql-request";
import { BlogsType } from "src/interfaces/blogs.inteface";
import { CategoriesType } from "src/interfaces/categories.interface";

const graphqlAPI = `${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}`;

export const BlogsService = {
  async getAllBlogs() {
    const query = gql`
      query GetBlogs {
        blogs {
          title
          excerpt
          image {
            url
          }
          id
          slug
          createdAt
          author {
            ... on Author {
              name
              avatar {
                url
              }
            }
          }
          category {
            ... on Category {
              label
              slug
            }
          }
          description {
            text
          }
        }
      }
    `;

    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
    return result.blogs;
  },

  async getLatestBlog() {
    const query = gql`
      query getLatestBlog {
        blogs(last: 2) {
          title
          excerpt
          slug
          id
          image {
            url
          }
          description {
            text
          }
          createdAt
          author {
            ... on Author {
              name
              avatar {
                url
              }
            }
          }
        }
      }
    `;

    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
    return result.blogs;
  },

  async getCategories() {
    const query = gql`
      query GetCategories {
        categories {
          label
          slug
        }
      }
    `;

    const result = await request<{ categories: CategoriesType[] }>(graphqlAPI, query);
    return result.categories;
  },

  async getDetailedBlog(slug: string) {
    const query = gql`
      query GetDetailedBlog($slug: String!) {
        blog(where: { slug: $slug }) {
          title
          excerpt
          image {
            url
          }
          id
          slug
          createdAt
          author {
            ... on Author {
              name
              avatar {
                url
              }
            }
          }
          category {
            ... on Category {
              label
              slug
            }
          }
          description {
            html
            text
          }
        }
      }
    `;

    const result = await request<{ blog: BlogsType }>(graphqlAPI, query, { slug });
    return result.blog;
  },

  async getDetailedCategory(slug: string) {
    const query = gql`
      query MyQuery($slug: String!) {
        blogs(where: { category: { Category: { slug: $slug } } }) {
          title
          excerpt
          image {
            url
          }
          id
          slug
          createdAt
          author {
            ... on Author {
              name
              avatar {
                url
              }
            }
          }
          category {
            ... on Category {
              label
              slug
            }
          }
          description {
            text
          }
        }
      }
    `;
    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query, { slug });
    return result.blogs;
  },
};
