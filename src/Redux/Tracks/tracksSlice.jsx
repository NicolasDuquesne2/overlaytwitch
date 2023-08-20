import { createSlice } from '@reduxjs/toolkit'
import { useAxios } from '../../Hooks/useAxios/useAxios'

export const tracksSlice = createSlice( {
    name: 'tracks',
    initialState: {
        value: null,
        err: ""
    },
    reducers: {
        getTracks: (state, action) => {
            state.value = action.payload
            state.err = ""
        },

        getError: (state, action) => {
            state.err = action.payload
            state.value = null
        }
    }
})

const { getTracks, getError } = tracksSlice.actions
export default tracksSlice.reducer


export const fetchTracks = (params) => async dispatch => {
    const dataFetch = useAxios(params)
    dataFetch
    .then(res => {
        res.error? dispatch(getError(res.error)): dispatch(getTracks(res.data))
    })
    .catch(err => console.log(err))
}