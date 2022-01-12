import React from 'react';

import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';

import "./news.css"

const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: "Cryptocurrency", count: simplified ? 10 : 100 });
    console.log(cryptoNews);

    return (
        <>
            <div className="news-wrapper">

            </div>
        </>
    )
}

export default News