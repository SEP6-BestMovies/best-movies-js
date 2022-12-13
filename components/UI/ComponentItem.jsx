import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../../styles/component-item.module.css";
import Image from "next/image";
import Link from "next/link";

const ComponentItem = (props) => {
  const [config, setConfig] = useState("");
  const fetchConfig = () => {
    axios.get(`https://api.themoviedb.org/3/configuration?api_key=${config.apiKey}`)
      .then((response) => {
        setConfig(response.data)
      });
  }
  useEffect(() => {
    fetchConfig()
  }, []);

  const handleConfig = () => {
    fetchConfig()
  }
  console.log(config)

  const { title, poster_path, genre_ids } = props.item;
  const baseUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "h632";
  const imgPath = baseUrl + posterSize + poster_path;
  return (
    <div className={`${classes.component__item}`} onLoadStart={() => handleConfig()}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {genre_ids.map((item, index) => (
          <span className={`${classes.component__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.component__img}`}>
        <Image alt="component-img" src={imgPath} width="380" height="520" />
      </div>

      <div className={`${classes.component__live} bg-transparent`}>
        <button className="primary__btn">
          <Link href={poster_path}>Action</Link>
        </button>
      </div>
    </div>
  );
};

export default ComponentItem;