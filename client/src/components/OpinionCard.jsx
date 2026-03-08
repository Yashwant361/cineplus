import React from "react";
import { likeOpinion, dislikeOpinion } from "../services/opinionApi";

export default function OpinionCard({ opinion }) {

  const handleLike = async () => {
    await likeOpinion(opinion._id);
    window.location.reload();
  };

  const handleDislike = async () => {
    await dislikeOpinion(opinion._id);
    window.location.reload();
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-xl p-4 mb-4 border border-gray-200 hover:shadow-lg transition">

        <h4 className="text-lg font-semibold text-gray-800">
          {opinion.nickname}
        </h4>

        <p className="text-yellow-500 font-medium mt-1">
          ⭐ {opinion.rating}
        </p>

        <p className="text-gray-700 mt-2">
          {opinion.comment}
        </p>

        <div className="flex gap-4 mt-3">

          <button
            onClick={handleLike}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-green-100 hover:bg-green-200 text-green-700 transition"
          >
            👍 {opinion.likes}
          </button>

          <button
            onClick={handleDislike}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 transition"
          >
            👎 {opinion.dislikes}
          </button>

        </div>

      </div>
    </>
  );
}