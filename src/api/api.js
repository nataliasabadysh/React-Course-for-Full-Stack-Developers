import axios from "axios";

export const fetchImagesByCategory = (category, page = 1) =>
  axios.get(
    `https://pixabay.com/api/?q=${category}&page=${page}&key=16656339-a562499c4313e4a5714644999&image_type=photo&orientation=horizontal&per_page=12`
  );
