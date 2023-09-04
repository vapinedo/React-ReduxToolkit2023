import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "./features/cake/cakeSlice";
import { icreamReducer } from "./features/icecream/icecreamSlice";
import { useReducer } from "./features/user/userSlice";

// const reduxLogger = require("redux-logger")
// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icreamReducer,
        user: useReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;