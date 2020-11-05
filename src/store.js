import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer/notesReducer'

// for redux dev tools chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create store 
export default createStore(
  reducer,
  // thunk middleware to allow for function actions
  composeEnhancers(applyMiddleware(thunk))
)
