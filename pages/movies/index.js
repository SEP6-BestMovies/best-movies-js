import { Card, Container } from "reactstrap";
import Head from "next/head";
import MovieCard from "../../components/moviesUI/MovieCard";
import React, { useState } from 'react';
import Image from 'next/image';
import styled from "styled-components";

const movies = ({
  getTopRatedMovies,
  getUpComingMovies,
  getHorrorMovies,
  getSciFiMovies,
  getFantasyMovie,
  getComedyMovie,
}) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "h632";
  const imgPath = baseUrl + posterSize;

  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.apiKeyDb}&language=en-US&query=${query}&page=1`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  }

  return (
    <Wrapper>
      <Container>
        <form class="center" onSubmit={searchMovies}>
              <label> Movie Name: <br/>
                  <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
              </label>
            <button type="submit">Search</button>
      </form>
      {movies.length > 0 && (
        <div className='card-group' >
          {movies.map(movie => (
            <li key={movie.id}>
                <Image alt="component-img" src={imgPath + movie.backdrop_path} width="379" height="522" />
                <h5 align='center'>{movie.title}</h5>
            </li>
      ))} </div>)} 
    
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
      </Container>
      </Wrapper>
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
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.apiKeyDb}&language=en-US&page=1
      `),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.apiKeyDb}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKeyDb}&with_genres=27`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKeyDb}&with_genres=878`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKeyDb}&with_genres=14`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKeyDb}&with_genres=35`
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

const Wrapper = styled.div`
  .container {
    allign: center;
    max-width: 1234px;
    margin: 100px auto;
`;