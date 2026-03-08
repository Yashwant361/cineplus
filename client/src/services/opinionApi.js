
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const createOpinion = async (data) => {

  const res = await axios.post(`${BASE_URL}/opinion`, data);

  return res.data;
};

export const getOpinions = async (movieId) => {

  const res = await axios.get(`${BASE_URL}/opinions/${movieId}`);

  return res.data;
};

export const likeOpinion = async (id) => {
  const res = await axios.put(`${BASE_URL}/opinion/like/${id}`);
  return res.data;
};

export const dislikeOpinion = async (id) => {
  const res = await axios.put(`${BASE_URL}/opinion/dislike/${id}`);
  return res.data;
};