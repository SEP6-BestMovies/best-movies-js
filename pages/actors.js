import React, { useState } from 'react';
import Image from 'next/image';
import { Card, Container, Form } from "reactstrap";
import styled from "styled-components";


const Actors = () => {
    const [query, setQuery] = useState('');
    const [actors, setActors] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/";
    const posterSize = "h632";
    const imgPath = baseUrl + posterSize;

    const searchActors = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/person?api_key=${process.env.apiKeyDb}&language=en-US&query=${query}&page=1&include_adult=false`;
        const res = await fetch(url);
        const data = await res.json();
        setActors(data.results);
    }

    return (
        <Wrapper>
            <Container>
                <form class="center" onSubmit={searchActors}>
                    <label>Actor Name: <br/>
                    <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
                    </label>
                    <button type="submit">Search</button>
                </form>    
                {actors.length > 0 && (
                    <div className='card-group' >
                        {actors.map(actor => (
                            <li key={actor.id}>
                                <Image alt="component-img" src={imgPath + actor.profile_path} width="379" height="515" />
                                <h4 align='center'>{actor.name}</h4>
                            </li>
                        ))} </div>)} 
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  .container {
    allign: center;
    max-width: 1234px;
    margin: 100px auto;
`;

export default Actors;
