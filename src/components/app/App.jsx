import React from 'react';
import CreateNoteForm from '../create-note-form/CreateNoteForm';
import NotesList from '../notes-list/NotesList'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import NoteDetails from '../note-detail/NoteDetails';
import UpdateNoteForm from '../note-update/UpdateNoteForm';

export default function App() {
  return (
    <>
      {/* Router */}
      <Router>
        <nav>
          <li><Link to="/">List</Link></li>
          <li><Link to="/add">Add</Link></li>
        </nav>

        <Switch>
          <Route exact path="/" component={NotesList} />
          <Route exact path="/add" component={CreateNoteForm} />
          <Route exact path="/notes/:id" component={NoteDetails} />
          <Route exact path="/notes/update/:id" component={UpdateNoteForm} />
        </Switch>
      </Router>
    </>
  );
}
