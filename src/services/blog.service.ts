import { request, gql } from "graphql-request";
import { BlogsType } from "src/interfaces/blogs.inteface";

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
          slug
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
};
