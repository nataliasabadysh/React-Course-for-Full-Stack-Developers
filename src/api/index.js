const ROOT = "https://pixabay.com/api";
const KEY = "16656339-a562499c4313e4a5714644999";
const PER_PAGE = 35;

export const api = {
  fetchJoke: () => "https://v2.jokeapi.dev/joke/Any",

  images: (query = "", page = "1") =>
    `${ROOT}/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`,
};
