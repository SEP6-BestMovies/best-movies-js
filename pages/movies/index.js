import { Card, CardGroup, Container } from "reactstrap";
import Head from "next/head";
import Genre from "../../components/moviesUI/Genre";
import Results from "../../components/moviesUI/Results";
import requests from "../../utils/requests"; 
import MovieCard from "../../components/moviesUI/MovieCard";


const movies = ({
  getTopRatedMovies,
  getUpComingMovies,
  getHorrorMovies,
  getSciFiMovies,
  getFantasyMovie,
  getComedyMovie,
}) => {
  return (
    <div>
      <Head>
        <title>Movies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MovieCard data={getUpComingMovies} title="Upcoming Movies" />
      <MovieCard data={getTopRatedMovies} title="Top Rated Movies" />
      <MovieCard data={getHorrorMovies} title="Horror" />
      <MovieCard data={getSciFiMovies} title="Sci-Fi" />
      <MovieCard data={getFantasyMovie} title="Fantasy" />
      <MovieCard data={getComedyMovie} title="Comedy" />
    </div>
  );
};

export default movies;

export async function getServerSideProps() {
  const [
    getUpComingMoviesRes,
    getTopRatedMoviesRes,
    getHorrorMoviesRes,
    getSciFiMoviesRes,
    getFantasyMovieRes,
    getComedyMovieRes,
  ] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1
      `),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=27`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=878`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=14`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=35`
    ),
  ]);

  const [
    getUpComingMovies,
    getTopRatedMovies,
    getHorrorMovies,
    getSciFiMovies,
    getFantasyMovie,
    getComedyMovie,
  ] = await Promise.all([
    getUpComingMoviesRes.json(),
    getTopRatedMoviesRes.json(),
    getHorrorMoviesRes.json(),
    getSciFiMoviesRes.json(),
    getFantasyMovieRes.json(),
    getComedyMovieRes.json(),
  ]);

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "h632";
  const imgPath = baseUrl + posterSize;

  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/person?api_key=9aac6c120264793707739eac992613b7&language=en-US&query=${query}&page=1&include_adult=false`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  }

  return {
    props: {
      getUpComingMovies: getUpComingMovies,
      getTopRatedMovies: getTopRatedMovies,
      getHorrorMovies: getHorrorMovies,
      getSciFiMovies: getSciFiMovies,
      getFantasyMovie: getFantasyMovie,
      getComedyMovie: getComedyMovie,
      getSearchedMovies: movies,
    },
  };

  const Actors = () => {
    

    return (
      <div className={styles.container}>
        <div>
          <form onSubmit={searchActors}>
            <label>
              Actor Name: <br />
              <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
            </label>
            <button type="submit">Search</button>
          </form>
          {actors.length > 0 && (
            <ul>
              {actors.map(actor => (
                <li key={actor.id}>
                  <p>
                    {actor.name}
                  </p>
                  <Image alt="component-img" src={imgPath + actor.profile_path} width="380" height="520" />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  export default Actors;
}