import { Router } from "next/router";
import { useRouter } from "next/router";
import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { coverImage } from "../../utils/image";
  
const MovieCard = ({ data, title }) => {
    const router = useRouter(); 
    return (
      <Wrapper>
        <h4 className="title">{title}</h4>
        <div className="container">
            {data.results.map((res) => {
              return (
                  <div
                    key={res.id}
                    className="data__container"
                    onClick={() => {
                        router.push(`/movies/${res.id}`);
                    }}
                  >
                    <Image
                      src={coverImage + res.poster_path}
                      alt={res.title || res.original_title}
                      height={350}
                      width={250}
                      className="container-image"
                    />
                    <h7 className="name">
                      {res.title?.length > 30 ||
                      res.original_title?.length > 30 ||
                      res.name?.length > 30 ||
                      res.original_name?.length > 30
                        ? res.title?.slice(0, 30) + "..." ||
                          res.original_title?.slice(0, 30) + "..." ||
                          res.name?.slice(0, 30) + "..." ||
                          res.original_name?.slice(0, 30) + "..."
                        : res.title ||
                          res.original_title ||
                          res.name ||
                          res.original_name}
                    </h7>
                  </div>
              );
            })}
        </div>
      </Wrapper>
    );
  };
  
  export default MovieCard;
  
  const Wrapper = styled.div`
    margin: 100px 0;
    overflow: hidden;
    width: 100%;
    .title {
      padding: 0 0 0 30px;
      color: white;
      font-size: 30px;
      font-family: "Manrope", sans-serif;
      margin: 20px 0;
    }
  
    .container {
      width: 100%;
      display: flex;
      align-items: center;
      overflow-x: scroll;
      padding: 0 0 0 30px;
    }
  
    .swiper-slide {
      width: 18%;
      border-radius: 5px;
  
      @media (max-width: 1280px) {
        width: 21%;
      }
  
      @media (max-width: 1024px) {
        width: 26%;
      }
  
      @media (max-width: 912px) {
        width: 30%;
      }
  
      @media (max-width: 820px) {
        width: 34%;
      }
  
      @media (max-width: 768px) {
        width: 36%;
      }
  
      @media (max-width: 540px) {
        width: 50%;
      }
  
      @media (max-width: 420px) {
        width: 70%;
      }
  
      @media (max-width: 380px) {
        width: 75%;
      }
  
      @media (max-width: 280px) {
        width: 100%;
      }
    }
  
    .container::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  
    .container::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
  
    .container::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
    }
  
    .data__container {
      width: 280px;
      height: max-content;
      margin: 0 10px 0 0;
      border-radius: 12px;
      cursor: pointer;
    }
  
    .container-image {
      border-radius: 5px;
      position: relative;
      transition: all 0.35s ease-in-out;
      @media (max-width: 412px) {
      }
    }
  
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 50px;
      background: rgba(0, 0, 0, 0.5);
      transition: all 0.35s ease-in-out;
      border-radius: 5px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
    }
  
    .rating {
      color: #fff500;
      font-family: "Manrope", sans-serif;
    }
  
    .name {
      color: white;
      font-family: "Manrope", sans-serif;
      margin: 0 10px 0 0;
    }
  `;
  