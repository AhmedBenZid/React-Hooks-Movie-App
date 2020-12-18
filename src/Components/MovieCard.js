import React from 'react'

function MovieCard({ el }) {

    return (
        <div className="movie_card " id="bright" style={{
            background: "url(" + el.posterUrl + ")"
        }}>
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={el.posterUrl} />
                    <h1>{el.title}</h1>
                </div>
                <div className="movie_desc">
                    <p className="text">{el.description}</p>
                </div>
                <div className="movie_social">
                    {"⭐".repeat(el.rate)}
                </div>
            </div>
            <div className="blur_back bright_back "></div>
        </div>
    )
}

export default MovieCard
