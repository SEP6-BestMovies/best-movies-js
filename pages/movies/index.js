import { Card, CardGroup, Container } from "reactstrap";
import Head from "next/head";
import Genre from "../../components/moviesUI/Genre";
import Results from "../../components/moviesUI/Results";
import requests from "../../utils/requests"; 
import { Fragment } from "react";

export default function Home({ results }) {
  return (
      <Container>
        {/* Navbar */}
        <Genre />
        {/* Results */}
        <Results results={results} />
      </Container>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre || "fetchTrending" || "fetchNetflixOriginals" || "fetchTopRated" || "fetchActionMovies"
    || "fetchComedyMovies" || "fetchHorrorMovies" || "fetchRomanceMovies" || "fetchDocumentaries";
  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre].url}`
  ).then((response) => response.json());

  return {
    props: {
      results: request.results,
    },
  };
}