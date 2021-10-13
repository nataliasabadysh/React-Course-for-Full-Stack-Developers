# Задание «Кинопоиск»

API themoviedb.org
Для бекенда используй themoviedb.org API. Необходимо зарегистриваться (можно ввести произвольные данные) и получить API-ключ. В этой работе будут использоваться следующие ендпоинты.

https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
..



```js 
// EXAMPLE from the class 
const apiKey = '1c3a2f981f61bd49f2b2f6d511373338';
const geMoviesAPI =  `https://api.themoviedb.org/3/trending/movie/day?api_key=1c3a2f981f61bd49f2b2f6d511373338`
const getMoviesDetailsAPI =  `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
```

```js
<img  src={`https://image.tmdb.org/t/p/w300/${move && (move.backdrop_path || move.poster_path || '')}`} width="620" />
<img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} width="320" />
```

# В приложении должны быть следующие маршруты. 


```js
'/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
'/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
```

# pages 
```
MoviesPage
MovieDetailsPage
NotFoundPage
```

# components 
```
Movies
    /MoveItem/MoveItem.js
    /MoveDetails/MoveDetails.js
     /MoveList/MoveList.js
```


