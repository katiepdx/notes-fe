import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, Redirect, useParams } from 'react-router-dom'
import { deleteNote } from '../../actions/notesActions'

const DeleteNote = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteNote(id))
  }

  return (
    <div>
      <h1>Delete Page</h1>
      <p>Just double checking you want to delete this note.</p>

      <Link to="/"><button>No, take me back to the list page</button></Link>
      <Link to="/"><button onClick={handleDelete}>Yes, delete.</button></Link>
    </div>
  )
}

export default DeleteNote
