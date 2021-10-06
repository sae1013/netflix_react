const API_KEY = "9bfcdf7f464de9ea9d694a906b858e38";

const requests = {
  fetchNetFlixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213&language=ko-KR`,
  fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=ko-KR`,
  fetchTopRate:`/movie/top_rated?api_key=${API_KEY}&language=ko-KR`,
  fetchPopulateMovie : `/discover/movie?sort_by=popularity.desc&language=ko-KR&api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=ko-KR`,
  fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35&language=ko-KR`,
  fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ko-KR`,
  fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99&language=ko-KR`,
  fetchDetailMovie:(movieId)=> (`/movie/${movieId}?api_key=${API_KEY}&language=ko-KR&append_to_response=credits,videos,similar,recommendations,collections`),
  fetchDetailTv: (tvId)=>(`/tv/${tvId}?api_key=${API_KEY}&language=ko-KR&append_to_response=credits,videos`),
}
export default requests;


