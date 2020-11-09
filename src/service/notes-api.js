export const createNewNote = async (note) => {
  const res = await fetch('http://localhost:7890/api/v1/notes', {
    method: "POST",
    body: JSON.stringify(note),
    headers: { "Content-Type": "application/json; charset=UTF-8" }
  })

  if (!res.ok) throw ('Failed to post from API')

  const apiRes = await res.json()

  return apiRes
}

export const getAllNotes = async () => {
  const res = await fetch('http://localhost:7890/api/v1/notes')

  if (!res.ok) throw ('Failed to get notes from the API')

  const apiRes = await res.json()

  return apiRes
}

export const getNoteById = async (id) => {
  const res = await fetch(`http://localhost:7890/api/v1/notes/${id}`)

  if (!res.ok) throw (`Failed to get note ${id} from the API`)

  const apiRes = await res.json()

  return apiRes
}

export const updateNoteById = async (id, note) => {
  const res = await fetch(`http://localhost:7890/api/v1/notes/${id}`, {
    method: "PUT",
    body: JSON.stringify(note),
    headers: { "Content-Type": "application/json; charset=UTF-8" }
  })

  if (!res.ok) throw ('Failed to update note')

  const apiRes = await res.json()

  return apiRes
}

export const deleteNoteById = async (id) => {
  const res = await fetch(`http://localhost:7890/api/v1/notes/${id}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })

  if (!res.ok) throw (`Failed to delete note ${id} from the API`)

  const apiRes = await res.json()

  return apiRes
}
