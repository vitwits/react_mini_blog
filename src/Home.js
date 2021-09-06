import { useEffect, useState } from "react";
import BlogLIst from "./BlogLIst";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect( () => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
      })
  }, [] ); //only runs on initial render withour dependencies

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogLIst blogs={blogs} title="All blogs!" />}
    </div>
  );
};

export default Home;