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

  return {
    props: {
      getUpComingMovies: getUpComingMovies,
      getTopRatedMovies: getTopRatedMovies,
      getHorrorMovies: getHorrorMovies,
      getSciFiMovies: getSciFiMovies,
      getFantasyMovie: getFantasyMovie,
      getComedyMovie: getComedyMovie,
    },
  };
}