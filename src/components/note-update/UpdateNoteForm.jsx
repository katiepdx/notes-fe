import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { singleNote, updateNote } from '../../actions/notesActions'

const UpdateNoteForm = () => {
  const [noteTopic, setNoteTopic] = useState('')
  const [noteDetails, setNoteDetails] = useState('')

  const { id } = useParams()

  const theNote = useSelector(state => state.note)

  const dispatch = useDispatch()

  useEffect(() => {
    // get single note and set it to state
    dispatch(singleNote(id))
    setNoteTopic(theNote.topic)
    setNoteDetails(theNote.note)
  }, [])

  const handleChange = ({ target }) => {
    if (target.name === 'note-topic') setNoteTopic(target.value)
    if (target.name === 'note-details') setNoteDetails(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(updateNote(id, {
      topic: noteTopic,
      note: noteDetails
    }))

    alert('Update complete!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="note-topic">Topic</label>
      <input
        id="note-topic"
        type="text"
        name="note-topic"
        value={noteTopic}
        onChange={handleChange}
      />

      <label htmlFor="note-details">Note</label>
      <textarea
        id="note-details"
        type="text"
        name="note-details"
        value={noteDetails}
        onChange={handleChange}
      />

      <button>Update Note</button>
    </form>
  )
}

export default UpdateNoteForm
