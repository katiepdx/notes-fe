import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notesList } from '../../actions/notesActions'
import NoteItem from '../note-item/NoteItem'
import { Link } from 'react-router-dom'

const NotesList = () => {
  const allNotes = useSelector(state => state.allNotes)

  const dispatch = useDispatch()

  // get notes from state on load
  useEffect(() => {
    dispatch(notesList())
  }, [])

  // Can add, list in console
  const notesElements = allNotes.map(note => (
    <Link to={`/notes/${note.id}`} key={note.id}>
      <li><NoteItem {...note} /></li>
    </Link>
  ))

  return (
    <section data-testid="all-notes">
      { notesElements}
    </section>
  )
}

export default NotesList
