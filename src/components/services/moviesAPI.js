const BASE_URL = ' https://api.themoviedb.org';
const API_KEY = '6c79c8740d327358775f1a54cc5339b1';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchHomePage() {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`,
  );
}

export function fetchSearchMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
  );
}

export function fetchMovieDetails(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMovieCredits(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/{movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/{movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}
