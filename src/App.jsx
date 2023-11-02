import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import { GET_POST } from "./Graphql/Queries";

import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Legal from "./components/Legal";

// menu items link
import Workshop from "./components/courses/Workshop"; // Make sure the path is correct
import About from "./components/courses/About";
import Meet_the_team from "./components/courses/Meet_the_team";
import Fpv_drone_filming from "./components/courses/Fpv_drone_filming";
import Traditional_drone_filming from "./components/courses/Traditional_drone_filming";
import Contact from "./components/courses/Contact";
import Film_and_tv from "./components/courses/Film_and_tv";
import Drone_tours from "./components/courses/Drone_tours";
import Safety from "./components/courses/Safety";
import Production from "./components/courses/Production";
import Events from "./components/courses/Events";
import Real_estate from "./components/courses/Real_estate";
import Gallery from "./components/courses/Gallery";
import Photography from "./components/courses/Photography";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();

  return `${month} ${day}, ${year}`;
};

const AllPosts = ({ posts }) => (
  <>
    <h1 className="text-5xl font-light text-center pt-16 pb-10">
      BE <span className="font-semibold">INSPIRED</span>
    </h1>
    <div className="grid grid-cols-3 gap-10 px-20">
      {posts.map((post) => (
        <div key={post.id} className=" p-4">
          <Link to={`/${post.slug}`} className="block">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
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

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GET_POST();
        setPosts(result.posts);
      } catch (err) {
        setError("Error fetching data");
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      {error && <p>{error}</p>}
      <div className="font-montserrat">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Content />
                <AllPosts posts={posts} /> {/* Added this line to include AllPosts */}
              </>
            }
          />

          <Route path="/workshop" element={<Workshop />} />
          <Route path="/about" element={<About />} />
          <Route path="/meet_the_team" element={<Meet_the_team />} />
          <Route path="/fpv_drone_filming" element={<Fpv_drone_filming />} />
          <Route path="/traditional_drone_filming" element={<Traditional_drone_filming />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/film_and_tv" element={<Film_and_tv />} />
          <Route path="/drone_tours" element={<Drone_tours />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/production" element={<Production />} />
          <Route path="/events" element={<Events />} />
          <Route path="/real_estate" element={<Real_estate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/:slug" element={<PostDetail />} />
        </Routes>
        <Footer />
        <Legal />
      </div>
    </Router>
  );
};

export default App;
