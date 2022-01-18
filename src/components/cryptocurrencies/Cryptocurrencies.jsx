import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from '../../services/cryptoApi';

import "./cryptocurrencies.css"

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {

        const filteredData = cryptosList?.data?.coins.filter(coin => (
            coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        ))

        setCryptos(filteredData)
    }, [cryptosList, searchTerm])

    if (isFetching) return 'Loading...'

    return (
        <>
            {!simplified &&
                <div className="search-crypto-bar">
                    <input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            }
            <div className="crypto-container">
                {cryptos?.map(crypto => (
                    <Link to={`/crypto/${crypto.uuid}`} key={crypto.uuid} style={{ textDecoration: "none" }}>
                        <div className='crypto-card'>
                            <h3>{crypto.rank}. {crypto.name}({crypto.symbol})</h3>
                            <img src={crypto.iconUrl} className="crypto-card-icon" />
                            <p>${millify(crypto.price, { precision: 2, lowercase: true })}</p>
                            <p>MarketCap: {millify(crypto.marketCap)}</p>
                            <p>24h Volume: {millify(crypto['24hVolume'])}</p>
                            <p>Daily Change: {crypto.change}%</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Cryptocurrencies
