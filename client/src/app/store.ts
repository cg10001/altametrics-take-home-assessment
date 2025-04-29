import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { invoiceSlice } from "./invoiceSlice"
import { userSlice } from "./userSlice"

export const rootReducer = combineSlices(userSlice, invoiceSlice)
export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
