import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'; 

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '8230c86359mshc4dfc6a4085cbcep1dd627jsn65e77ffac603'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'; 

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({ 
    reducerPath: 'cryptoApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`./coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`./coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`)
        })
    })
})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi; 