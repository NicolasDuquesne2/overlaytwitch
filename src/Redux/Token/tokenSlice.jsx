import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice( {
    name: 'token',
    initialState: {
        value: null
    },
    reducers: {

        setToken: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setToken } = tokenSlice.actions
export default tokenSlice.reducer