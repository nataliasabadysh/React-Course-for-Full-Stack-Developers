export const api = {
  fetchJoke: () => "https://v2.jokeapi.dev/joke/Any",
  images: (query = "", page = "1") =>
    `https://pixabay.com/api/?q=${query}&page=${page}&key=16656339-a562499c4313e4a5714644999&image_type=photo&orientation=horizontal&per_page=12`,
};
