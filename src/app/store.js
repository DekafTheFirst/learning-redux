import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";
const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

// store.subscribe(() => console.log(store));
export default store;
