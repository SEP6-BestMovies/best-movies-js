import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../components/auth/auth';
import { setErrorMessage } from '../components/auth/setErrorMessage';
import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "reactstrap";
import ComponentItem from '../components/UI/ComponentItem';
import Image from 'next/image';


const Actors = () => {
    const [query, setQuery] = useState('');
    const [actors, setActors] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/";
    const posterSize = "h632";
    const imgPath = baseUrl + posterSize;

    const searchActors = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/person?api_key=9aac6c120264793707739eac992613b7&language=en-US&query=${query}&page=1&include_adult=false`;
        const res = await fetch(url);
        const data = await res.json();
        setActors(data.results);
    }

    return (
        <div className={styles.container}>
        <div>
            <form onSubmit={searchActors}>
                <label>
                    Actor Name: <br/>
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
