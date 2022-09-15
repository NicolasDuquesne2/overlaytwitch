import { createSlice } from '@reduxjs/toolkit'
import { useAxios } from '../../Hooks/useAxios/useAxios'

export const followersSlice = createSlice( {
    name: 'followers',
    initialState: {
        value: null,
        err: ""
    },
    reducers: {
        getFollowers: (state, action) => {
            state.value = action.payload
        },

        getError: (state, action) => {
            state.err = action.payload
        }
    }
})

const { getFollowers, getError } = followersSlice.actions
export default followersSlice.reducer


export const fetchFollowers = (params) => async dispatch => {
    const dataFetch = useAxios(params)
    dataFetch
    .then(res => {
        res.error? dispatch(getError(res.error)): dispatch(getFollowers(res))
    })
    .catch(err => console.log(err))
}