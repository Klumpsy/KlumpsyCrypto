import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';

import { MdReadMore } from 'react-icons/md'

import { useGetCryptosQuery } from '../../services/cryptoApi';

import Cryptocurrencies from "../cryptocurrencies/Cryptocurrencies";
import News from "../news/News"
import "./homepage.css";

const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats

    if (isFetching) return "Loading..."

    return (
        <>
            <h1 className="home-global-stats-title">Global Crypto Statistics</h1>
            <div className="home-stats-wrapper">
                <div className="home-stats-container">
                    <div>
                        <h2>Total Cryptocurrencies</h2>
                        <p>{globalStats.total}</p>
                    </div>
                    <div>
                        <h2>Total Market Cap</h2>
                        <p>{millify(globalStats.totalMarketCap)}</p>
                    </div>
                    <div>
                        <h2>Total Markets</h2>
                        <p>{millify(globalStats.totalMarkets)}</p>
                    </div>
                </div>
                <div className="home-stats-container">
                    <div>
                        <h2>Total Exchanges</h2>
                        <p>{globalStats.totalExchanges}</p>
                    </div>
                    <div>
                        <h2>Total 24h Volume</h2>
                        <p>{millify(globalStats.total24hVolume)}</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="home-top-10-title">
                    <h1>Top 10 Crypto's</h1>
                    <Link to="/cryptocurrencies">Show more <MdReadMore size={22} /></Link>
                </div>
                <Cryptocurrencies simplified />
            </div>
            <div>
                <div className="home-crypto-news-title">
                    <h1>Latest Crypto News</h1>
                    <Link to="/news">Show more <MdReadMore size={22} /></Link>
                </div>
                <News simplified />
            </div>
        </>
    )
}

export default Homepage
