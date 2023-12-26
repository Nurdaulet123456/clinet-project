import { combineReducers, configureStore } from "@reduxjs/toolkit";
import prideReducer from './slices/pride.slice'
import schoolInfoReducer from './slices/schoolInfo.slice'

const combineReducer = combineReducers({
    pride: prideReducer,
    schoolInfo: schoolInfoReducer
})


export const store = configureStore({
    reducer: combineReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})


const { getState, dispatch } = store

export type RooteState = ReturnType<typeof getState>
export type AppDispatch = typeof dispatch