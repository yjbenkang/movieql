import axios from "axios";

const api = axios.create({ baseURL: "https://yts.mx/api/v2" });

export const getMovies = async (limit, rating) => {
  const { 
    data: {
      data: {movies}
    } 
  } = await api.get("/list_movies.json", { 
        params: {limit: 50, rating: 9 } 
      });
  return movies;
}
  
