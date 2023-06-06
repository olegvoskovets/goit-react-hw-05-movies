import axios from 'axios';

//const API_KEY = `a5b6a326b3d57e17f5af1e0ae72e46c4`;
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// const options = {
//   api_kay: API_KEY,
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
//   headers: { accept: 'application/json' },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// export const getTrendingAll = async () => {
//   const { data } = await axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
//   return data;
// };
export const getTrendingAll = () => {
  const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI2YTMyNmIzZDU3ZTE3ZjVhZjFlMGFlNzJlNDZjNCIsInN1YiI6IjY0N2U0MmZkY2Y0YjhiMDEyMjc3NDM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eU3geUgU7gdfdJgShq8FOWYPDmv3QE_A54hAo9Hzl64',
    },
  };

  const data = fetch(url, options).then(res => res.json());

  return data;
};
export const getMovieId = id => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI2YTMyNmIzZDU3ZTE3ZjVhZjFlMGFlNzJlNDZjNCIsInN1YiI6IjY0N2U0MmZkY2Y0YjhiMDEyMjc3NDM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eU3geUgU7gdfdJgShq8FOWYPDmv3QE_A54hAo9Hzl64',
    },
  };

  const data = fetch(url, options).then(res => res.json());

  return data;
};

export const getMovieIdCredits = id => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI2YTMyNmIzZDU3ZTE3ZjVhZjFlMGFlNzJlNDZjNCIsInN1YiI6IjY0N2U0MmZkY2Y0YjhiMDEyMjc3NDM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eU3geUgU7gdfdJgShq8FOWYPDmv3QE_A54hAo9Hzl64',
    },
  };

  const data = fetch(url, options).then(res => res.json());
  return data;
};
export const getMovieIdReviews = id => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI2YTMyNmIzZDU3ZTE3ZjVhZjFlMGFlNzJlNDZjNCIsInN1YiI6IjY0N2U0MmZkY2Y0YjhiMDEyMjc3NDM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eU3geUgU7gdfdJgShq8FOWYPDmv3QE_A54hAo9Hzl64',
    },
  };

  const data = fetch(url, options).then(res => res.json());
  return data;
};

export const getSearchMovie = search => {
  const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI2YTMyNmIzZDU3ZTE3ZjVhZjFlMGFlNzJlNDZjNCIsInN1YiI6IjY0N2U0MmZkY2Y0YjhiMDEyMjc3NDM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eU3geUgU7gdfdJgShq8FOWYPDmv3QE_A54hAo9Hzl64',
    },
  };

  const data = fetch(url, options).then(res => res.json());
  return data;
};
