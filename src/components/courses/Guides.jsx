import { useEffect, useState } from "react";
import { request } from "graphql-request";
import { GET_POSTS } from "../../Graphql/Queries";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const API_URL = import.meta.env.VITE_APP_API;
const TOKEN = import.meta.env.VITE_APP_TOKEN;

const Guides = () => {
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
        setPosts(result.posts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return "Loading...";
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="text-5xl font-light text-center pt-40 pb-10">
        LEARN ABOUT HOW DRONES CAN BENEFIT <span className="font-semibold">YOU</span>
      </h1>
      <div className="grid md:grid-cols-3 px-4 md:px-20">
        {posts.map((post) => (
          <div key={post.id} className=" p-4">
            <Link to={`/${post.slug}`} className="block">
              {post.coverPhoto && post.coverPhoto.url && (
                <img src={post.coverPhoto.url} alt={post.title} className="mt-4 h-64" />
              )}
              <h2 className="text-4xl font-extrabold mb-4 mt-2">{post.title}</h2>
            </Link>
            <div>
              {ReactHtmlParser(post.content.html, {
                transform: (node) => {
                  if (node.type === "tag" && (node.name === "img" || node.name === "video")) {
                    return null;
                  }
                },
              })
                .flatMap((node) => (node ? node.props.children || "" : []))
                .join("")
                .replace(/\[object Object\]/g, " ") // Replace [object Object] with an empty string
                .split(" ")
                .slice(0, 30)
                .join(" ")}
              ...
            </div>
            <Link to={`/${post.slug}`} className="block mt-2 text-gray-500">
              <p>Read More</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Guides;
