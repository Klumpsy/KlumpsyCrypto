import { configureStore } from '@reduxjs/toolkit'; 

import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import { cryptoExchangesApi } from "../services/cryptoExchangesApi"; 

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoExchangesApi.reducerPath]: cryptoExchangesApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    }, 
})