import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { MovieDelete } from '../../redux/action/MovieAction'
import MovieEdit from '../MovieEdit/MovieEdit'

const MovieCard = ({movie}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={movie.Url}/>
                <Card.Body>
                    <Card.Title>{movie.Title}
                    </Card.Title>
                    <Card.Text>
                       <span>{movie.description}</span>
                       <br/>
                       <span>{movie.Rating}</span>
                    </Card.Text>
                    <div className='d-flex justify-content-around'>
                    <Button variant="danger" onClick={()=>dispatch(MovieDelete(movie.id))}> Delete</Button>
                    <MovieEdit movie={movie}/>
                    <Button variant="primary"> Watch </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
