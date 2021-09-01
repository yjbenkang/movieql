import { getDetails, getMovies, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, {limit, rating}) => getMovies(limit, rating),
    movie: (_, {id}) => getDetails(id),
    suggestions: (_, {id}) => getSuggestions(id)

  }
};

export default resolvers;