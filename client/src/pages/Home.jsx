import React, { useEffect, useState } from 'react';
import { getTrendingMovies, searchMovies } from "../services/tmdbApi";
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';

export default function Home() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {

    const fetchMovies = async () => {
      const data = await getTrendingMovies();
      setMovies(data);
    };

    fetchMovies();

  }, []);

  useEffect(() => {

    const timer = setTimeout(async () => {

      if (query.trim() === "") {
        const data = await getTrendingMovies();
        setMovies(data);
        return;
      }

      const data = await searchMovies(query);
      setMovies(data);

    }, 500);

    return () => clearTimeout(timer);

  }, [query]);



  return (
    <>
      <Navbar/>

      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          Trending Movies
        </h1>

        
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          className="w-full md:w-96 p-2 mb-6 rounded border"
        />

     
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}

        </div>

      </div>
    </>
  )
}