import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../../styles/component-item.module.css";
import Image from "next/image";
import genres from "../data/genre";
import { useAuth } from "../auth/auth";
import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const ComponentItem = (props) => {
  const [config, setConfig] = useState("");
  const fetchConfig = () => {
    axios.get(`https://api.themoviedb.org/3/configuration?api_key=${process.env.apiKeyDb}`)
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

  const { title, poster_path, genre_ids, id } = props.item;
  const baseUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "h632";
  const imgPath = baseUrl + posterSize + poster_path;

  const genre_types = [];
  for (let index = 0; index < genre_ids.length; index++) {
    for (let j = 0; j < genres.length; j++) {
      if (genre_ids[index] === genres[j].id) {
        genre_types.push(genres[j].name);
      }
    }
  }

  const auth = useAuth();
  const db = getFirestore();

  const addToWatched = async (e) => {
    const userRef = doc(db, "users", auth.user.email);
    updateDoc(userRef, { watched: arrayUnion(id) });
  }

  return (
    <div className={`${classes.component__item}`} onLoadStart={() => handleConfig()}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {genre_types.map((item, index) => (
          <span className={`${classes.component__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.component__img}`}>
        <Image alt="component-img" src={imgPath} width="380" height="520" />
      </div>

      <div className={`${classes.component__live} bg-transparent`}>
        <button className="btn" onClick={addToWatched}>Add to Watched</button>
      </div>
    </div>
  );
};

export default ComponentItem;