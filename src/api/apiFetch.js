const URL = 'https://api.themoviedb.org/3/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI2YTMyNmIzZDU3ZTE3ZjVhZjFlMGFlNzJlNDZjNCIsInN1YiI6IjY0N2U0MmZkY2Y0YjhiMDEyMjc3NDM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eU3geUgU7gdfdJgShq8FOWYPDmv3QE_A54hAo9Hzl64',
  },
};
export const getTrendingAll = () => {
  const url = `${URL}trending/all/day?language=en-US`;

  const data = fetch(url, options).then(res => res.json());

  return data;
};
export const getMovieId = id => {
  const url = `${URL}movie/${id}?language=en-US`;

  const data = fetch(url, options).then(res => res.json());

  return data;
};

export const getMovieIdCredits = id => {
  const url = `${URL}movie/${id}/credits?language=en-US`;

  const data = fetch(url, options).then(res => res.json());
  return data;
};
export const getMovieIdReviews = id => {
  const url = `${URL}movie/${id}/reviews?language=en-US&page=1`;

  const data = fetch(url, options).then(res => res.json());
  return data;
};

export const getSearchMovie = search => {
  const url = `${URL}search/movie?query=${search}&include_adult=false&language=en-US&page=1`;

  const data = fetch(url, options).then(res => res.json());
  return data;
};
