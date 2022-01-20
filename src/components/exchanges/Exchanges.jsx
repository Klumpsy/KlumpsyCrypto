import React from 'react';
import millify from 'millify';
import "./exchanges.css"
import ReactLoading from 'react-loading';

import { useGetCryptoExchangesQuery } from "../../services/cryptoExchangesApi";

const Exchanges = () => {

    const { data: exchanges, isFetching } = useGetCryptoExchangesQuery();

    console.log(exchanges)
    if (isFetching) return <div className="spinner-loader-container"><ReactLoading type="spinningBubbles" color="rgb(103, 119, 114)" height={50} width={50} /></div>

    return (
        <div>
            {exchanges.map(exchange => {
                if (exchange.volume_1day_usd) {
                    return (
                        <div className="exchange-card" key={exchange.exchange_id}>
                            <h2>{exchange.name}</h2>
                            <div className="exchange-data">
                                <p>Daily Volume: {millify(exchange.volume_1day_usd)}</p>
                                <p>Hourly Volume: {millify(exchange.volume_1hrs_usd)}</p>
                                <a href={exchange.website} target="_blank">Visit Exchange</a>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Exchanges
