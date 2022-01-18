import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'; 

const cryptoApiExchangesHeaders = {
    "X-CoinAPI-Key": "F704483C-3D35-433C-85AD-03AC5CE9D704"
  }

const baseUrl = 'https://rest.coinapi.io/v1'; 

const createRequest = (url) => ({url, headers: cryptoApiExchangesHeaders})

export const cryptoExchangesApi = createApi({ 
    reducerPath: 'cryptoNewsApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoExchanges: builder.query({
            query: () => createRequest(`/exchanges`)
        })
    })
})

export const { useGetCryptoExchangesQuery } = cryptoExchangesApi; 