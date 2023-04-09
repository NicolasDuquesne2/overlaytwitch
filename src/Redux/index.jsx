import { configureStore } from '@reduxjs/toolkit'
import followersReducer from './Followers/followersSlice'

const store = configureStore({
    reducer: {
        followers: followersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export default store