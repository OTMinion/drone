import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_SINGLE_POST } from "../Graphql/Queries";

const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const result = await GET_SINGLE_POST(slug);
      setPost(result.post);
    };
    fetchPost();
  }, [slug]);

  return (
    <div className="pt-40 px-32">
      {post ? (
        <div className="">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default PostDetail;
