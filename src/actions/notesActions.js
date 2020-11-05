import { createNewNote } from '../service/notes-api'

export const ADD_NOTE = 'ADD_NOTE'
export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note
})

// FUNCTION ACTIONS 
export const newNote = (newNote) => (dispatch) => {
  return createNewNote(newNote)
    .then(note => {
      console.log(note, 'NOTE')
      // add note to global state
      dispatch(addNote(note))
      return note
    })
}
