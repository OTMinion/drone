import { gql } from "graphql-request";

export const GET_POSTS = gql`
  query MyQuery {
    posts {
      coverPhoto {
        url
      }
      createdAt
      updatedAt
      id
      slug
      title
      content {
        html
      }
    }
  }
`;
