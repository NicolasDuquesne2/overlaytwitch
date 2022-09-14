import { createSlice } from '@reduxjs/toolkit'

export const followersSlice = createSlice( {
    name: 'followers',
    initialState: {
        value: [],
    },
    reducers: {
        set: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { add, update } = followersSlice.actions
export default followersSlice.reducer