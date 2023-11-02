import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "graphql-request";
import "./PostContent.css";

const API_URL = import.meta.env.VITE_APP_API;
const TOKEN = import.meta.env.VITE_APP_TOKEN;

const PostContent = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const GET_POST_BY_SLUG = `
          query GetPostBySlug {
            posts(where: { slug: "${slug}" }) {
              title
              content {
                html
              }
            }
          }
        `;
        const headers = {
          Authorization: `Bearer ${TOKEN}`,
        };
        const result = await request(API_URL, GET_POST_BY_SLUG, {}, headers);
        if (result.errors) {
          setError(result.errors[0].message);
          setLoading(false);
          return;
        }
        setPost(result.posts[0]);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <div className="pt-40 px-32">
      {loading && "Loading..."}
      {error && <p>Error: {error}</p>}
      {post && (
        <div className="leading-relaxed">
          <h1 className="text-4xl font-semibold pb-10">{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
        </div>
      )}
    </div>
  );
};

export default PostContent;
