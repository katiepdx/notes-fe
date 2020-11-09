// add reducer test
// import notes actions for the switch cases
import { ADD_NOTE, SET_NOTES, SET_ONE_NOTE, UPDATE_ONE_NOTE } from '../actions/notesActions'

const initialState = {
  // object from form state with note topic (topic) and note details (note)
  form: {},
  // single note for get by id
  note: [],
  // array of all notes (objects)
  allNotes: []
}

const reducer = ((state = initialState, action) => {
  // switch cases using action types
  switch (action.type) {
    case ADD_NOTE:
      // set state using the action payload, the api response
      return {
        ...state,
        allNotes: [action.payload, ...state.allNotes]
      }
    // set notes to state
    case SET_NOTES:
      return {
        ...state,
        allNotes: action.payload
      }

    case SET_ONE_NOTE:
      return {
        ...state,
        note: action.payload
      }

    case UPDATE_ONE_NOTE:
      return {
        ...state,
        note: action.payload
      }

    default:
      return state
  }
})

export default reducer
