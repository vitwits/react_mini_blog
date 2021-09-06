import { useEffect, useState } from "react";
import BlogLIst from "./BlogLIst";

const Home = () => {
  const [blogs, setBlogs] = useState( null );
  const [isPending, setIsPending] = useState( true );
  const [error, setError] = useState( null )

  useEffect( () => {
    setTimeout( () => {
      fetch( 'http://localhost:8000/blogs' )
        .then( res => { //response object
          if (!res.ok) {
            throw Error( 'Could not fetch data from that resourse' );
          }
          return res.json();
        } )
        .then( data => {
          setBlogs( data );
          setIsPending( false );
          setError(null);
        } )
        .catch( err => {
          setIsPending( false );
          setError( err.message );
        } )
    }, 2000 )
  }, [] ); //only runs on initial render withour dependencies

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogLIst blogs={blogs} title="All blogs!" />}
    </div>
  );
};

export default Home;