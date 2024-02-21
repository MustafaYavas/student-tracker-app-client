import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import StudentsReducer from './reducers/StudentsReducer';
import Saga from './saga/Saga.js';

const rootReducer = combineReducers({
  students: StudentsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(Saga);

export default store;
