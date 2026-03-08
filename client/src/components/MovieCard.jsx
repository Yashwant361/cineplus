import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard({ movie }) {
    const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <>
            <>
                <Link to={`/movie/${movie.id}`}>

                    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer">

                        <img
                            src={poster}
                            alt={movie.title}
                            className="w-full h-[300px] object-cover"
                        />

                        <div className="p-3 text-white">

                            <h3 className="text-sm font-semibold line-clamp-2">
                                {movie.title}
                            </h3>

                            <p className="text-yellow-400 text-sm mt-1">
                                ⭐ {movie.vote_average}
                            </p>

                        </div>

                    </div>

                </Link>
            </>
        </>
    )
}