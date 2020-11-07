import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NotesList from './NotesList';
import { Provider } from 'react-redux'
import store from '../../store';
import { getAllNotes } from '../../service/notes-api';
import { MemoryRouter } from 'react-router-dom'

jest.mock('../../service/notes-api')

describe('<NotesList/>', () => {
  it('should display all saved notes from store to the screen', () => {
    // mock resolved value from api
    getAllNotes.mockResolvedValue([
      {
        id: '1',
        topic: 'Topic 1',
        note: 'Topic 1 Notes.'
      },
      {
        id: '2',
        topic: 'Topic 2',
        note: 'Topic 2 Notes.'
      },
      {
        id: '3',
        topic: 'Topic 3',
        note: 'Topic 3 Notes.'
      }
    ])

    render(
      <MemoryRouter>
        <Provider store={store}>
          <NotesList />
        </Provider>
      </MemoryRouter>
    )

    const notesList = screen.getByTestId('all-notes')

    return waitFor(() => {
      expect(notesList.children).toHaveLength(3)
    })
  })
})
