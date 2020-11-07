import React from 'react';
import CreateNoteForm from '../create-note-form/CreateNoteForm';
import NotesList from '../notes-list/NotesList'

export default function App() {
  return (
    <>
      <h1>Note App</h1>
      <CreateNoteForm />
      <NotesList />
    </>
  );
}
