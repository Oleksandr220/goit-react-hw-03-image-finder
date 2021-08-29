import axios from 'axios';

const API_KEY = '21940108-061a720ebe354b15c34ff51f3';

const FetchFilmApi = (request, curPage = 1) => {
  return axios.get(
    `https://pixabay.com/api/?q=${request}&page=${curPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export default FetchFilmApi;
