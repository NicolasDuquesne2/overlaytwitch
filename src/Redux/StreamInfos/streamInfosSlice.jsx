import { createSlice } from '@reduxjs/toolkit'
import { useAxios } from '../../Hooks/useAxios/useAxios'

export const streamInfosSlice = createSlice( {
    name: 'followers',
    initialState: {
        value: null,
        err: ""
    },
    reducers: {
        getStreamInfos: (state, action) => {
            state.value = action.payload
            state.err = ""
        },

        getError: (state, action) => {
            state.err = action.payload
            state.value = null
        }
    }
})

const { getStreamInfos, getError } = streamInfosSlice.actions
export default streamInfosSlice.reducer


export const fetchStreamInfos = (params) => async dispatch => {
    const dataFetch = useAxios(params)
    dataFetch
    .then(res => {
        res.error? dispatch(getError(res.error)): dispatch(getStreamInfos(res.data))
    })
    .catch(err => console.log(err))
}