// Needs a test
// store form info to local state, then add to global store on submit 

import React, { useState } from 'react'
import { createNewNote } from '../../service/notes-api'

const CreateNoteForm = () => {
  // create local state for form info
  const [noteTopic, setNoteTopic] = useState('')
  const [noteDetails, setNoteDetails] = useState('')

  // handleChange to update state when user types 
  const handleChange = ({ target }) => {
    // conditionally set state based off of target.name
    if (target.name === 'note-topic') setNoteTopic(target.value)
    if (target.name === 'note-details') setNoteDetails(target.value)
  }

  // handleSubmit updates global redux state with local state and resets local state 
  const handleSubmit = async (event) => {
    event.preventDefault()

    // test createNewNote works using local state 
    const apiRes = await createNewNote({
      topic: noteTopic,
      note: noteDetails
    })

    // reset state 
    await setNoteTopic('')
    await setNoteDetails('')
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

      <button>Add Note</button>
    </form>
  )
}

export default CreateNoteForm
