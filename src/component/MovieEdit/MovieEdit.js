import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { EditMovie } from '../../redux/action/MovieAction';

const MovieEdit = ({movie}) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const [Title, setTitle] = useState(movie.Title)
      const [Url, setUrl] = useState(movie.Url)
      const [desription, setDescription] = useState(movie.desription)
      const [Rate, setRate] = useState(movie.Rating)
      const handSubmit = (e) => {
          e.preventDefault()
          dispatch(EditMovie({id:movie.id, Title: Title, Url: Url, Rating: Rate, description: desription}))
      }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>
           
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <form onSubmit={handSubmit}>
                    Title: <input type="text" className='form-control' onChange={(e)=> setTitle(e.target.value)} value={Title}/>
                    Description : <input type="text" className='form-control' onChange={(e)=> setDescription(e.target.value)} value={desription}/>
                    Url: <input type="url" className='form-control'onChange={(e)=> setUrl(e.target.value)} value={Url}/>
                    Rate : <input type="number" className='form-control' onChange={(e)=> setRate(e.target.value)} value={Rate}/>
                    <button variant="secondary" type="submit" onClick={handleClose}>
                        Save
                    </button>
                    </form>
                </Modal.Body>
                <Modal.Footer>                  
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MovieEdit
