import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = () => {
    const movielist = useSelector(state => state.ReducerMovie.movies)
    const [text, setText] = useState("")
    return (
        <div className='container ml-5'>
            <div style={{ marginLeft: "350px" }}>
                <label style={{marginRight:"20px", fontSize:"18px", fontWeight:"bold"}}> Search </label>
                <input type="text"
                    className='col-md-5 mt-3'
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
            </div>
            <div className='d-flex justify-content-around flex-wrap mt-5'>

                {
                    movielist.filter(elt => elt.Title.toUpperCase().trim().includes(text.toUpperCase().trim()))
                        .map((movie, index) => <MovieCard movie={movie} key={index} />)
                }
            </div>
        </div>
    )
}

export default MovieList
