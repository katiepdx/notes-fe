import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import store from '../../store';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<Provider store={store}><App /></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
