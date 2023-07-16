import { configureStore } from '@reduxjs/toolkit'
import followersReducer from './Followers/followersSlice'
import streamInfosReducer from './StreamInfos/streamInfosSlice'

const store = configureStore({
    reducer: {
        followers: followersReducer,
        streamInfos: streamInfosReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export default store