import React, { useState } from "react";
import { createOpinion } from "../services/opinionApi";

export default function OpinionForm({ movieId, refreshOpinions }) {

    const [nickname, setNickname] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createOpinion({
            movieId, nickname, rating, comment
        });
        setNickname('');
        setRating('');
        setComment('')

        refreshOpinions()
    };
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4"
            >
                <h3 className="text-xl font-semibold text-gray-800">
                    Write Comment
                </h3>

                <input
                    placeholder="Name"
                    required
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />

                <input
                    placeholder="Rating (1-10)"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />

                <textarea
                    placeholder="Write your opinion..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
                />

                <button
                    type="submit"
                    className="w-full bg-violet-500 hover:bg-violet-600 text-white font-medium py-2 rounded-lg transition duration-200"
                >
                    Submit
                </button>
            </form>
        </>
    )

}