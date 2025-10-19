import axios from "axios";

const booksAPI = axios.create({ baseURL: "http://localhost:3001/books" });

async function getAllBooks() {
  const response = await booksAPI.get("/");
  return response.data;
}

export { getAllBooks };
