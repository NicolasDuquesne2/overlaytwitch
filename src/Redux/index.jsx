import { configureStore } from '@reduxjs/toolkit'
import followersReducer from './Followers/followersSlice'
import streamInfosReducer from './StreamInfos/streamInfosSlice'
import tracksReducer from './Tracks/tracksSlice'

const store = configureStore({
    reducer: {
        followers: followersReducer,
        streamInfos: streamInfosReducer,
        tracks: tracksReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export default store