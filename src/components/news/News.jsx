import React from 'react';

import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
import moment from 'moment';

import "./news.css"

const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: "Cryptocurrency", count: simplified ? 10 : 100 });

    if (!cryptoNews?.value) return "Loading..."

    return (
        <>
            <div className="news-wrapper">
                {cryptoNews.value.map(newsItem => (
                    <div className="news-item-container" key={newsItem.name}>
                        <div className="news-item-title">
                            <h3>{newsItem.name}</h3>
                            <img src={newsItem?.image?.thumbnail?.contentUrl} alt="news" />
                        </div>
                        <div className="news-item-description">
                            <p>
                                {newsItem.description > 100 ? `${newsItem.description.substring(0, 100)}...` : newsItem.description}
                            </p>
                        </div>
                        <div className="news-item-link">
                            <img className="news-avatar" src={newsItem?.provider[0]?.image?.thumbnail?.contentUrl} />
                            <p>{moment(newsItem.datePublished).startOf('ss').fromNow()}</p>
                            <a href={newsItem.url} target="_blank">Read more</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default News