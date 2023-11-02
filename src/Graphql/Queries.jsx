import request, { gql } from "graphql-request";

const endpoint = import.meta.env.VITE_APP_API;
const token = import.meta.env.VITE_APP_TOKEN;

export const GET_POST = async () => {
  const query = gql`
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
        description
      }
    }
  `;

  try {
    const result = await request(endpoint, query, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const GET_SINGLE_POST = async (slug) => {
  // Removed ": string"
  const query = gql`
    query SinglePost($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        content {
          html
        }
      }
    }
  `;

  try {
    const result = await request(
      endpoint,
      query,
      {
        slug,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return result;
  } catch (error) {
    console.error("Error fetching single post:", error);
    throw error;
  }
};
