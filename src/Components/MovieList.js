import React from 'react';
import { CardDeck } from 'react-bootstrap';
import MovieCard from './MovieCard'

function MovieList({ movieList }) {
    return (

        <CardDeck className="d-flex align-content-start flex-wrap ">
            {movieList.map((el, i) => <MovieCard key={i} el={el} />)}
        </CardDeck>
    )
}

export default MovieList
