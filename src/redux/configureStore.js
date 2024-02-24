import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import StudentsReducer from './reducers/StudentsReducer';
import Saga from './saga/Saga.js';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    students: StudentsReducer,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(Saga);

export default store;
