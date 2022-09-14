import { createSlice } from '@reduxjs/toolkit'
import { useAxios } from '../../Hooks/useAxios/useAxios'

export const followersSlice = createSlice( {
    name: 'followers',
    initialState: {
        value: [],
    },
    reducers: {
        getFollowers: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { getFollowers } = followersSlice.actions
export default followersSlice.reducer