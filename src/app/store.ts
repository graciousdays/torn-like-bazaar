import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import marketReducer from "../features/market/marketSlice";
import marketSaga from "../features/market/marketSaga";


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: { market: marketReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(marketSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
