import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState( null );
  const [isPending, setIsPending] = useState( true );
  const [error, setError] = useState( null );

  useEffect( () => {
    const abortCont = new AbortController();

    setTimeout( () => {
      fetch( url, { signal: abortCont.signal } )//associate abortCont with the fetch request
        .then( res => { //response object
          if (!res.ok) {
            throw Error( 'Could not fetch data from that resourse' );
          }
          return res.json();
        } )
        .then( data => {
          setData( data );
          setIsPending( false );
          setError( null );
        } )
        .catch( err => {
          if (err.name === 'AbortError') {
            console.log( 'fetch error' )
          } else {
            setIsPending( false );
            setError( err.message );
          }
        } )
    }, 1000 );

    return () => abortCont.abort();
  }, [url] ); //only runs on initial render withour dependencies

  return { data, isPending, error };
}

export default useFetch;