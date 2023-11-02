import React, { useEffect, useState } from "react";
import { request } from "graphql-request";
import { GET_POSTS } from "../Graphql/Queries";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_APP_API;
const TOKEN = import.meta.env.VITE_APP_TOKEN;

const PostDetail = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${TOKEN}`,
        };
        const result = await request(API_URL, GET_POSTS, {}, headers);
        if (result.errors) {
          setError(result.errors[0].message);
          setLoading(false);
          return;
        }
        setPosts(result.posts);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  if (loading) return "Loading...";
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="text-5xl font-light text-center pt-16 pb-10">
        BE <span className="font-semibold">INSPIRED</span>
      </h1>
      <div className="grid grid-cols-3 gap-10 px-20">
        {posts.map((post) => (
          <div key={post.id} className=" p-4">
            <Link to={`/${post.slug}`} className="block">
              <h2 className="text-lg font-semibold pb-6">{post.title}</h2>
              {post.coverPhoto && post.coverPhoto.url && (
                <img src={post.coverPhoto.url} alt={post.title} className="mt-4" />
              )}
            </Link>
            <hr className="border-t border-gray-400 mt-10 mb-4" />
            <p className="italic">{formatDate(post.updatedAt)}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostDetail;
