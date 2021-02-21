
// import axios from 'axios'

// const instance = axios.create({
//     baseURL:"https://api.themoviedb.org/3",
// })

// export default instance;

// https://api.themoviedb.org/3/movie/550?api_key=4b8ad922294b4f051aa9d162d7479f90

import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;