import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import CardSerie from './CardSerie'

const Series = () => {
    const [Serie, setSerie] = useState([
        {
            title: "The Book of Boba Fett",
            url: "https://m.media-amazon.com/images/M/MV5BZjllZjE1MWEtYTJhZC00MWIyLTliMjEtYzM3ODc4YzQ2MjFlXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_SX300.jpg",
            description: "The spin-off of "
        },
        {
            title: "Dexter: New Blood",
            url: "https://m.media-amazon.com/images/M/MV5BNGQ3MDU2YWEtYzJmZC00YzUxLWExMDYtYjk4MzJkZjMyNTZmXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_SX300.jpg",
            description: "Set 10 years after Dexter Morgan went missing in the eye of Hurricane Laura "
        },
        {
            title: "Legacies",
            url: "https://m.media-amazon.com/images/M/MV5BMmQ0YzA3ZGUtMDAyNC00YTdhLTg1ZmYtMDU2YzNkY2YzYTU4XkEyXkFqcGdeQXVyMjU0OTAwMDc@._V1_SX300.jpg",
            description: "Hope Mikaelson, a tribrid daughter of a Vampire/Werewolf hybrid, makes her way in the world.e spin-off of "
        },
        {
            title: "The Flash",
            url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NTgwNTA4NF5BMl5BanBnXkFtZTgwMDQ0MDUxMDI@._V1_SX300.jpg",
            description: "After being struck by lightning, Barry Allen wakes up from his coma to discover "
        }
    ])
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
        <div  className='d-flex justify-content-around flex-wrap mt-5'>
            {
           Serie.filter(elt => elt.title.toUpperCase().trim().includes(text.toUpperCase().trim())).map((elt,index)=>
           <CardSerie serie={elt}  key={index} />)}
        </div>
        </div>
    )
}

export default Series
