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
  console.log(apiRes, 'SERVICE FILE')
  return apiRes
}
