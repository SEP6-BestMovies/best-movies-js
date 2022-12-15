import React, { useState, useEffect } from "react";

const CarouselItem = (props) => {

    const { title, poster_path, genre_ids } = props.item;
    const baseUrl = "https://image.tmdb.org/t/p/";
    const posterSize = "h632";
    const imgPath = baseUrl + posterSize + poster_path;

    return (
        <div>
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png"
                alt="image1" />
            <p></p>
        </div>
    );
};

export default CarouselItem;
