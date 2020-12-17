import React from 'react'
import { Card } from 'react-bootstrap'

function MovieCard({ el }) {

    return (
        <Card style={{ width: 200 }} className="mb-4">
            <Card.Img variant="top" src={el.posterUrl} style={{ height: 300 }} />
            <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                    {el.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                {"⭐".repeat(el.rate)}
            </Card.Footer>
        </Card>
    )
}

export default MovieCard
