import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'; 

const cryptoApiNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '8230c86359mshc4dfc6a4085cbcep1dd627jsn65e77ffac603'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'; 

const createRequest = (url) => ({url, headers: cryptoApiNewsHeaders})

export const cryptoNewsApi = createApi({ 
    reducerPath: 'cryptoNewsApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi; 