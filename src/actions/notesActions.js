import { createNewNote, getAllNotes } from '../service/notes-api'

export const ADD_NOTE = 'ADD_NOTE'
export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note
})

export const SET_NOTES = 'SET_NOTES'
// set notes to state - notesList is response from api
export const setNotes = (notesList) => ({
  type: SET_NOTES,
  payload: notesList
})

// FUNCTION ACTIONS 
export const newNote = (newNote) => (dispatch) => {
  return createNewNote(newNote)
    .then(note => {
      // add note to global state
      dispatch(addNote(note))
      return note
    })
}

export const notesList = () => (dispatch) => {
  return getAllNotes()
    .then(notesList => {
      console.log(notesList, 'NOTESLIST ACTIONS')
      dispatch(setNotes(notesList))
    })
}
