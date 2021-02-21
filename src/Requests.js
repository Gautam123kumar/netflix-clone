// const API_KEY = "4b8ad922294b4f051aa9d162d7479f90";

// const requests = {
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     featchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     featchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     featchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     featchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     featchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     featchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
// };

// export default requests;

// https://api.themoviedb.org/3/discover/tv?api_key=4b8ad922294b4f051aa9d162d7479f90&with_networks=213


const API_KEY = "fb34530271b349314af0de263d16ab5a";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;