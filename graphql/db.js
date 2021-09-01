//axios version
import axios from "axios";

const BASE_URL = "https://yts-proxy.now.sh/";
const MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const { 
    data: {
      data: {movies}
    } 
  } = await axios(MOVIES_URL, { 
        params: {limit, minimum_rating:rating} 
      });
  return movies;
}


export const getDetails = async id => {
  const { 
    data: {
      data: {movie}
    } 
  } = await axios(MOVIE_DETAILS_URL, { 
        params: {movie_id: id} 
      });
  return movie;
}

export const getSuggestions = async id => {
  const { 
    data: {
      data: {movies}
    } 
  } = await axios(MOVIE_SUGGESTIONS_URL, { 
        params: {movie_id: id} 
      });
  return movies;
}
// fetch Version
//Description: yarn add node-fetch를 한 후 fetch를 사용하면 code: 'err_require_esm' 에러가 떴다. 그래서 node-fetch 2.6.1 버전으로 명시하여 설치하여 에러를 해결하였다.
// import fetch from "node-fetch";
// const API_URL = "https://yts.am/api/v2/list_movies.json?";

// export const getMovies = (limit, rating) => {
//   let REQUEST_URL = API_URL;
//   if (limit > 0) {
//     REQUEST_URL += `limit=${limit}`;
//   }
//   if (rating > 0) {
//     REQUEST_URL += `&minimum_rating=${rating}`;
//   }
//   return fetch(REQUEST_URL)
//     .then(res => res.json())
//     .then(json => json.data.movies);
// };