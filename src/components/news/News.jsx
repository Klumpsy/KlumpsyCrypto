import React, { useState } from 'react';

import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../../services/cryptoApi';

import moment from 'moment';

import "./news.css"

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: newsCategory, count: simplified ? 6 : 100 });
    const { data } = useGetCryptosQuery(100);

    if (!cryptoNews?.value) return "Loading..."

    return (
        <>
            {!simplified && (
                <select
                    className='news-select-menu'
                    placeholder="Select crypto"
                    onChange={(e) => setNewsCategory(e.target.value)}
                >
                    <option value="Cryptocurrency" key="Cryptocurrency">Cryptocurrency</option>
                    {
                        data?.data?.coins?.map(crypto => (<option key={crypto.name} value={crypto.name}>{crypto.name}</option>))
                    }
                </select>
            )
            }
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
                            <p className="news-time-stamp">{moment(newsItem.datePublished).startOf('ss').fromNow()}</p>
                            <a href={newsItem.url} target="_blank">Read more</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default News