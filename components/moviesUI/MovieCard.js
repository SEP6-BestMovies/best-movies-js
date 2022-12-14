import { Router } from "next/router";
import { useRouter } from "next/router";
import React from "react";
  
const MovieCard = ({ result }) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original";
    const router = useRouter(); 
    
    return (
        <div class="card-group" display="flex" key={result.id} className="data__container"
        onClick={() => {
            if (result.media_type === "tv") {
              router.push(`/movies/${result.id}`);
            } else {
              router.push(`movie/${result.id}`);
            }
          }}
        >
            <div class="card">
            <img class="card-img-top"
                src={BASE_URL + result.backdrop_path} 
                alt="Card image cap" />
            <div class="body">
                <p class="card-text">{result.overview}</p>
                <h2 class="card-title">{result.title || result.name}</h2>
                <p class="card-text"><small class="text-muted">Release date: {result.release_date}</small></p>
                <p class="card-text"><small className="text-muted">Rated: {result.vote_count}</small></p>
            </div>
            </div>
        </div>
  );
};

export default MovieCard;