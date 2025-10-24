import axios from "axios";

const favoritesAPI = axios.create({
  baseURL: "http://localhost:3001/favorites",
});

async function getAllFavorites() {
  const response = await favoritesAPI.get("/");
  return response.data;
}

async function postFavorite(id) {
  await favoritesAPI.post(`/${id}`);
}

async function deleteFavorite(id) {
  await favoritesAPI.delete(`/${id}`);
}

export { getAllFavorites, postFavorite, deleteFavorite };
