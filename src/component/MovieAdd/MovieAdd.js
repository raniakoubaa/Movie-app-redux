import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {AddMovie} from '../../redux/action/MovieAction'


const MovieAdd = () => {
    const [show, setShow] = useState(false);
  const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Title, setTitle] = useState("")
    const [Url, setUrl] = useState("")
    const [desription, setDescription] = useState("")
    const [Rate, setRate] = useState(0)
    const handSubmit = (e) =>{
        e.preventDefault()
        dispatch(AddMovie({ id: Math.random(), Title: Title, Url: Url, Rating: Rate, description: desription }))
   
        setTitle(" ")
        setUrl(" ")
        setDescription(" ")
        setRate(0)

    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow} size="lg"  className='addButton'>
                Add Movie
            </Button>
           
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <form onSubmit={handSubmit}>
                    Title: <input type="text" className='form-control' onChange={(e)=> setTitle(e.target.value)} value={Title}/>
                    Description : <input type="text" className='form-control' onChange={(e)=> setDescription(e.target.value)} value={desription}/>
                    Url: <input type="url" className='form-control'onChange={(e)=> setUrl(e.target.value)} value={Url}/>
                    Rate : <input type="number" className='form-control' onChange={(e)=> setRate(e.target.value)} value={Rate}/>
                    <Button variant="success" type="submit" onClick={handleClose} className="mt-3 col-md-8 ml-5">
                        Save
                    </Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>                  
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MovieAdd
