// add reducer test
// import notes actions for the switch cases
import { ADD_NOTE } from '../actions/notesActions'

const initialState = {
  // object from form state with note topic (topic) and note details (note)
  form: {},
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
  }
})

export default reducer
