import { request, gql } from "graphql-request";
import { BlogsType } from "src/interfaces/blogs.inteface";
import { CategoriesType } from "src/interfaces/categories.interface";

const graphqlAPI = `https://us-west-2.cdn.hygraph.com/content/cm42qi27y01mv07w3ollvv1sx/master`;
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
};
