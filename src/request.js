import {API_KEY} from './config';

const requests = {
  fetchNetFlixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213&language=ko-KR`,
  fetchUpComing:`/movie/upcoming?api_key=${API_KEY}&language=ko-KR`,
  // fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=ko-KR`,
  fetchTopRate:`/movie/top_rated?api_key=${API_KEY}&language=ko-KR`,
  fetchPopulateMovie : `/movie/popular?language=ko-KR&region=KR&api_key=${API_KEY}`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53&language=ko-KR`,
  fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35&language=ko-KR`,
  fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ko-KR`,
  fetchTvMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10770&language=ko-KR`,
  fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99&language=ko-KR`,
  fetchDetailMovie:(movieId)=> (`/movie/${movieId}?api_key=${API_KEY}&language=ko-KR&append_to_response=credits,videos,similar,recommendations,collections`),
  fetchCollection: (id) => `/collection/${id}?api_key=${API_KEY}&language=ko-KR`,
}
export default requests;
