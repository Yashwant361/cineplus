import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/tmdbApi";
import { getOpinions } from "../services/opinionApi";
import OpinionForm from "../components/OpinionForm";
import OpinionCard from "../components/OpinionCard";
import Navbar from "../components/Navbar";

function MoviePage() {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {

    fetchMovie();
    fetchOpinions();

  }, [id]);

  const fetchMovie = async () => {
    const data = await getMovieDetails(id);
    setMovie(data);
  };

  const fetchOpinions = async () => {
    const data = await getOpinions(id);
    setOpinions(data);
  };

  if (!movie) return <h2>Loading...</h2>;

  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <>
     <Navbar/>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">
          {movie.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-start">


          <div className="flex justify-center">
            <img
              src={poster}
              alt={movie.title}
              className="rounded-lg shadow-lg w-72 hover:scale-105 transition duration-300"
            />
          </div>

          <div>
            <p className="text-gray-600 mb-4">
              {movie.overview}
            </p>

            <p className="text-yellow-500 font-semibold text-lg mb-6">
              ⭐ {movie.vote_average}
            </p>

            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <OpinionForm movieId={id} refreshOpinions={fetchOpinions} />
            </div>

          </div>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Comments
          </h2>

          <div className="space-y-4">

            {opinions.map(opinion => (
              <OpinionCard key={opinion._id} opinion={opinion} />
            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default MoviePage;