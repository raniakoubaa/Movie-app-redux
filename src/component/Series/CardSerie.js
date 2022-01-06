import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CardSerie = ({serie}) => {
    return (
        <div>
             <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={serie.url}/>
                <Card.Body>
                    <Card.Title>{serie.title}</Card.Title>
                    <Card.Text>
                        {serie.description}
                    </Card.Text>
                    <Button variant="primary">Watch</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardSerie
