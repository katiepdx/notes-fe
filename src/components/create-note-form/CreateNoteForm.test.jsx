import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import CreateNoteForm from './CreateNoteForm';
import { Provider } from 'react-redux'
import store from '../../store';
import { createNewNote } from '../../service/notes-api';

// Jest mock note api service 
jest.mock('../../service/notes-api')

describe('<CreateNoteForm/>', () => {
  it('resets form on submit after a successful post', () => {

    // mock resolved value from api
    createNewNote.mockResolvedValue({
      id: '24',
      topic: 'New Topic',
      note: 'New Detail'
    })

    render(<Provider store={store}><CreateNoteForm /></Provider>)

    const noteTopicInput = screen.getByLabelText('Topic')
    const noteDetailInput = screen.getByLabelText('Note')
    const submitButton = screen.getByRole("button")

    // mock user inputting info
    userEvent.type(noteTopicInput, 'Note Topic')
    userEvent.type(noteDetailInput, 'Note Detail')

    // mock user clicking submit button
    userEvent.click(submitButton)

    return waitFor(() => {
      expect(noteTopicInput).toHaveTextContent('')
      expect(noteDetailInput).toHaveTextContent('')
    })
  })
});
