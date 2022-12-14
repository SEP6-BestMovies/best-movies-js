import React from "react";
import styled from "styled-components";
import { bgImage, coverImage } from "../../utils/image";
import { useRouter } from "next/router";
import Image from "next/image";
import MovieCard from "../../components/moviesUI/MovieCard";
import Head from "next/head";

const Movie = ({ movieDetails, similarMovies, castMember }) => {
    const router = useRouter(); 

    return (
        <>
        <Head>
            <title>{movieDetails.title || movieDetails.original_title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
            <Wrapper>
                <div
                    className="bg_container"
                    style={{
                        background: `url(${bgImage + movieDetails.backdrop_path}) no-repeat center center/cover `,
                    }}>
                </div>

                <div className="container">
                    <div className="movie-main-details">
                        <div className="details-2">
                            <Image
                                src={coverImage + movieDetails.poster_path}
                                alt={movieDetails.title || movieDetails.original_title}
                                height={350}
                                width={350}
                                className="container-image" />
                        </div>

                        <div className="details-1">
                            <h1 className="title">
                                {movieDetails.title || movieDetails.original_title}
                            </h1>

                            <div className="details-3">
                                <p className="det lang">{movieDetails.original_language}</p>
                                <p className="det rate">
                                    Rating - {movieDetails.vote_average?.toFixed(1)}/10
                                </p>
                                <p className="det">Runtime - {movieDetails.runtime} minutes</p>
                            </div>

                            <div className="genres-container">
                                {movieDetails.genres?.slice(0, 3).map((data) => (
                                    <p key={data.id} className="genres">
                                        {data.name}
                                    </p>
                                ))}
                            </div>

                            <div className="overview-container">
                                <h3 className="story-line">Story Line</h3>
                                <h4 className="overview">{movieDetails.overview}</h4>
                            </div>

                            {movieDetails.tagline ? (
                                <p className="tagline">
                                    Tag Line :{" "}
                                    <span className="tag"> {movieDetails.tagline} </span>
                                </p>
                            ) : null}
                        </div>
                    </div>
                </div>
            </Wrapper>
            <MovieCard data={similarMovies} title="Similar Movies" />
        </>
    );
};

export default Movie; 

export async function getServerSideProps(context) {
    const { id } = context.query;
  
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.apiKeyDb}&language=en-US`
    ).then((response) => response.json());
  
    const requestSimilar = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.apiKeyDb}&language=en-US&page=1`
    ).then((response) => response.json());
  
    const requestCast = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.apiKeyDb}&language=en-US`
    ).then((response) => response.json());
  
  
    return {
      props: {
        movieDetails: request,
        similarMovies: requestSimilar,
        castMember: requestCast,
      },
    };
}
  
const Wrapper = styled.div`
  transition: all 0.35s ease-in-out;
  color: white;
  .bg_container {
    width: 100%;
    height: 60vh;
    margin: 100px auto;
    position: relative;
  }

  .container {
    max-width: 1234px;
    margin: 100px auto;
  }

  .container-image {
    border-radius: 5px;
    height: 350px;
    width: 250px;
  }

  .movie-main-details {
    display: grid;
    grid-template-columns: 260px auto;
    gap: 10px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .title {
    font-family: "Manrope", sans-serif;
    font-size: 60px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 40px;
      margin: 100px 0;
      text-align: center;
    }

    @media (max-width: 412px) {
      font-size: 25px;
    }

    @media (max-width: 400px) {
      font-size: 15px;
    }
  }

  .genres-container {
    display: grid;
    grid-template-columns: repeat(4, auto);
    width: fit-content;
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    margin: 5px;
    text-align: center;
    @media (max-width: 640px) {
      grid-template-columns: repeat(3, auto);
    }

    @media (max-width: 412px) {
      grid-template-columns: repeat(2, auto);
    }
  }

  .genres {
    background: rgba(255, 255, 255, 0.1);
    color: #9a9a9a;
    backdrop-filter: blur(120px);
    font-family: "Manrope", sans-serif;
    border-radius: 15px;
    padding: 10px 20px;
    border: 1px solid rgba(255, 255, 255, 0.4);

    @media (max-width: 412px) {
      padding: 5px 10px;
    }
  }

  .trailer-button {
    padding: 10px 20px;
    border: none;
    outline: none;
    border-radius: 30px;
    font-family: "Manrope", sans-serif;
    font-size: 20px;
    margin: 20px 0;
    background: #2547fc;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
  }

  .story-line {
    font-family: "Manrope", sans-serif;
    font-size: 30px;
    font-weight: 600;
  }

  .tagline {
    font-family: "Manrope", sans-serif;
    font-size: 20px;
    margin: 10px 0;
    background: rgba(255, 255, 255, 0.1);
    width: max-content;
    padding: 5px 10px;
    border-radius: 12px;

    @media (max-width: 912px) {
      inline-size: auto;
      overflow-wrap: break-word;
    }

    @media (max-width: 820px) {
      inline-size: auto;
      overflow-wrap: break-word;
    }

    @media (max-width: 640px) {
      font-size: 15px;
      inline-size: 100%;
      overflow-wrap: break-word;
    }

    @media (max-width: 375px) {
      font-size: 11px;
      inline-size: 100%;
      overflow-wrap: break-word;
    }

    @media (max-width: 280px) {
      font-size: 10px;
    }
  }

  .tag {
    color: #2547fc;
    overflow-wrap: break-word;

    @media (max-width: 640px) {
      inline-size: 100%;
      overflow-wrap: break-word;
    }

    @media (max-width: 375px) {
      inline-size: 100%;
      overflow-wrap: break-word;
    }
  }

  .details-2 {
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 100px 0;
    }
  }

  .details-1 {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 12px;
    }
  }

  .details-3 {
    font-family: "Manrope", sans-serif;
    display: flex;
    gap: 10px;
  }

  .det {
    background: rgba(255, 255, 255, 0.1);
    padding: 5px 10px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 12px;
    margin-bottom: 10px;

    @media (max-width: 640px) {
      font-size: 12px;
    }
  }

  .rate {
    color: #fff500;
  }

  .lang {
    color: #2547fc;
  }

  .overview-container {
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
    }
  }

  .overview {
    font-family: "Manrope", sans-serif;
    color: #9a9a9a;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;