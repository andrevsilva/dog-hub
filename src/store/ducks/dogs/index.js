import { createAction , createReducer } from '@reduxjs/toolkit'
const INITIAL_STATE = [];

export const addDog = createAction('ADD_DOG');
export const addDogs = createAction('ADD_DOGS');

export default createReducer(INITIAL_STATE, {
    [addDog.type]: (state, action) => [...state, action.payload],
    [addDogs.type]: (state, action) => [...action.payload]
})
