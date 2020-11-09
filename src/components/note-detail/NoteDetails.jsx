import React, { useEffect } from 'react'
// import to dispatch actions
import { useDispatch, useSelector } from 'react-redux'
// useParams to get the id off of the params 
import { useParams } from 'react-router-dom'
import { singleNote } from '../../actions/notesActions'
import { Link } from 'react-router-dom'

const NoteDetails = () => {
  const { id } = useParams()

  const theNote = useSelector(state => state.note)

  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch action and pass it the params - id from params
    dispatch(singleNote(id))
  }, [])

  return (
    <div>
      <h1 data-testid="note-topic">{theNote.topic}</h1>
      <section data-testid="note-details">{theNote.note}</section>

      <Link to={`/notes/update/${id}`}><button>Update</button></Link>
    </div>
  )
}

export default NoteDetails
