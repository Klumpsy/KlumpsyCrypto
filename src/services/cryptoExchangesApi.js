import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'; 

const cryptoApiExchangesHeaders = {
    "X-CoinAPI-Key": process.env.REACT_APP_CRYPTO_EXCHANGES_API_KEY
  }

const baseUrl = 'https://rest.coinapi.io/v1'; 

const createRequest = (url) => ({url, headers: cryptoApiExchangesHeaders})

export const cryptoExchangesApi = createApi({ 
    reducerPath: 'cryptoExchangesApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoExchanges: builder.query({
            query: () => createRequest(`/exchanges`)
        })
    })
})

export const { useGetCryptoExchangesQuery } = cryptoExchangesApi; 