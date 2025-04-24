import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit"
import type { User } from "./types"

const initialState: User = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state : User, action : PayloadAction<User>) => {
            state.email = action.payload.email
            state.id = action.payload.id
            state.name = action.payload.name
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer