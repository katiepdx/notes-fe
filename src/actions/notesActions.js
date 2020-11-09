import { createNewNote, deleteNoteById, getAllNotes, getNoteById, updateNoteById } from '../service/notes-api'

export const ADD_NOTE = 'ADD_NOTE'
export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note
})

export const SET_NOTES = 'SET_NOTES'
export const setNotes = (notesList) => ({
  type: SET_NOTES,
  payload: notesList
})

export const SET_ONE_NOTE = 'SET_ONE_NOTE'
export const setOneNote = (singleNote) => ({
  type: SET_ONE_NOTE,
  payload: singleNote
})

export const UPDATE_ONE_NOTE = 'UPDATE_ONE_NOTE'
export const updateOneNote = (updateNote) => ({
  type: UPDATE_ONE_NOTE,
  payload: updateNote
})

export const DELETE_ONE_NOTE = 'DELETE_ONE_NOTE'
export const deleteOneNote = (note) => ({
  type: DELETE_ONE_NOTE,
  payload: note
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
      dispatch(setNotes(notesList))
    })
}

export const singleNote = (id) => (dispatch) => {
  return getNoteById(id)
    .then(oneNote => {
      dispatch(setOneNote(oneNote))
    })
}

export const updateNote = (id, updateNote) => (dispatch) => {
  return updateNoteById(id, updateNote)
    .then(note => {
      dispatch(updateOneNote(note))
    })
}

export const deleteNote = (id) => (dispatch) => {
  return deleteNoteById(id)
    .then(note => {
      dispatch(deleteOneNote(note))
    })
}
