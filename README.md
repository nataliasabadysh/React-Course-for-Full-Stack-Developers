

# Base links about the React 

[React Reconciliation](https://www.youtube.com/watch?v=A0W2n2azH5s&ab_channel=%D0%90%D0%B9%D0%A2%D0%B8%D0%A1%D0%B8%D0%BD%D1%8F%D0%BA)

[Key](https://ru.reactjs.org/docs/lists-and-keys.html#keys)

[Why we shoudn’t use Index as a key](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)

[React без JSX(doc)](https://ru.reactjs.org/docs/react-without-jsx.html)

[React без JSX](https://learn.co/lessons/react-create-element)

[new-react-devtools](https://reactjs.org/blog/2019/08/15/new-react-devtools.html)

[dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
# Components

[React.js шпаргалка](https://devhints.io/react)

# Styles 
[Styled Components](https://emotion.sh/docs/styled)

# children
https://ru.reactjs.org/docs/composition-vs-inheritance.html

# context 
https://github.com/GeekEast/react-context

https://tproger.ru/translations/react-context-in-5-min/


# USefull Links

[12 React Best Practices You Need to Follow in 2020](https://www.codeinwp.com/blog/react-best-practices/)


https://wattenberger.com/blog/react-hooks
https://overreacted.io/a-complete-guide-to-useeffect/?utm_campaign=a-complete-guide-to-reacts-useeffecta
https://levelup.gitconnected.com/4-custom-hooks-to-boost-your-react-app-d54aefe34061


# Pritter 

script 

npm i -D prettier-eslint prettier
npm i prettier-eslint-cli 



# material-ui

npm install @material-ui/core





# Form in React 

[Choosing a React form library for your next project](https://retool.com/blog/choosing-a-react-form-library/)

[The Best React Form Library To Use](https://frontend-digest.com/the-best-react-form-library-to-use-in-2020-11e93c267e4)

[Looking for the Best React Form Library in 2021? It’s Probably on This List](https://dev.to/pmbanugo/looking-for-the-best-react-form-library-in-2021-it-s-probably-on-this-list-e2h)

[Формы](https://learn-reactjs.ru/basics/forms)

# formik lib
https://formik.org/docs/examples/with-material-ui

https://formik.org/users



[Как динамически задать имя свойства объекта JS](https://coderoad.ru/42048337/%D0%9A%D0%B0%D0%BA-%D0%B4%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8-%D0%B7%D0%B0%D0%B4%D0%B0%D1%82%D1%8C-%D0%B8%D0%BC%D1%8F-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-JS)

[Material UI + formik](https://formik.org/docs/examples/with-material-ui)


# ROUTING 

npm i react-router-dom

[Протокол HTTP. Общие сведения](https://alekseev74.ru/lessons/show/http/basics)


[A little bit of history](https://medium.com/@pshrmn/a-little-bit-of-history-f245306f48dd)

[Lib doc](https://reactrouter.com/web/guides/quick-start)


<!-- GO back history.push(props.location.state.from); -->

<!-- <Route exact path={routes.HOME} component={HomePage} />
<Route path={routes.MOVIE_DETAILS} component={MovieDetailsPage} />
<Route path={routes.MOVIES} component={MoviesPage} /> -->

<!-- export default {
  HOME: '/',
  MOVIES: '/movies',
  MOVIE_DETAILS: '/movies/:movieId',
}; -->

<!-- 
{movies.map(movie => (
            <div className="item" key={movie.id}>
              <Link
                to={{
                  pathname: `${routes.MOVIES}/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.original_title || movie.original_name}
              </Link>
            </div>
          ))} -->

<!-- 
  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = () => {
    const { movieId } = this.props.match.params;
    apiService
      .fetchMoviesDetails(movieId)
      .then(movie => this.setState({ movie }));
  };

  onGoBack = () => {
    props.history.push('/movies');
  }; -->

```js
const apiKey = 'c297c19c2e8522b6413b995ef0a34ee4';

const getTrending = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey} `,
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('not found');
    })
    .then(data => data.results)
    .catch(err => {
      throw err;
    });
};
const fetchMoviesDetails = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey} `,
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('not found');
    })
    .catch(err => {
      throw err;
    });
};

```
