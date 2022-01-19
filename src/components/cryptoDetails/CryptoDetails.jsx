import React, { useState } from 'react';
import HTMLReactParser from "html-react-parser";
import { useParams } from 'react-router-dom';
import millify from 'millify';

//icons
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { VscGraphLine } from "react-icons/vsc";
import { MdOutlineChangeCircle } from "react-icons/md";
import { BsGraphUp, BsGraphDown } from "react-icons/bs";
import { BiExclude } from "react-icons/bi";
import { FcCandleSticks } from "react-icons/fc";
import { BsTrophy } from "react-icons/bs";
import { TiArrowLoop } from "react-icons/ti";
import { MdApproval } from "react-icons/md";

//Components 
import Linechart from '../linechart/Linechart';

//API
import { useGetCryptoDetailsQuery } from "../../services/cryptoApi";
import { useGetCryptoHistoryQuery } from "../../services/cryptoApi";

import "./cryptoDetails.css";
import { Line } from 'react-chartjs-2';

const CryptoDetails = () => {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('7d');

    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod })

    const cryptoDetails = data?.data?.coin

    if (isFetching) return "loading.."

    const checkChange = (number) => {
        const regEx = /[-]/
        return regEx.test(number)
    }

    const changeIcon = (upOrDown) => {
        const regEx = /[-]/
        return regEx.test(upOrDown) ? <BsGraphDown size={25} style={{ marginRight: "7px" }} /> : <BsGraphUp size={25} style={{ marginRight: "7px" }} />
    }

    const checkSupply = (supplyCheck) => {
        return supplyCheck ? <FaCheck /> : <ImCross />
    }

    return (
        <div className="crypto-details-container">
            <div className="crypto-details-wrapper">
                <div className="crypto-details-header">
                    <img className="crypto-details-image" src={cryptoDetails.iconUrl} />
                    <div className="crypto-details-title">
                        <h1>{cryptoDetails.name} [{cryptoDetails.symbol}]</h1>
                        <p>Rank: #{cryptoDetails.rank}</p>
                    </div>
                </div>
                <div className="crypto-details-stats">
                    <div>
                        <span>
                            <FcCandleSticks size={25} />
                            <p>24h Volume: {millify(cryptoDetails['24hVolume'])}</p>
                        </span>
                        <span>
                            <BiExclude size={25} />
                            <p>Market Cap: {millify(cryptoDetails.marketCap)}</p>
                        </span>
                        <span style={{ display: "flex" }}>
                            {changeIcon(cryptoDetails.change)}
                            Change: <p style={checkChange(cryptoDetails.change) ?
                                { color: "red", marginLeft: "5px" } : { color: "green", marginLeft: "5px" }}>
                                {millify(cryptoDetails.change, { precision: 2 })}%</p>
                        </span>
                        <span>
                            <MdOutlineChangeCircle size={25} />
                            <p>Listed Exchanges: {cryptoDetails.numberOfExchanges}</p>
                        </span>
                        <span>
                            <VscGraphLine size={25} />
                            <p>Number of Markets: {cryptoDetails.numberOfMarkets}</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <img className="crypto-details-image" src={cryptoDetails.iconUrl} style={{ width: "25px" }} />
                            <p>Current Price: ${millify(cryptoDetails.price, { precision: 2 })}</p>
                        </span>
                        <span>
                            <BsTrophy size={25} />
                            <p>ATH: ${millify(cryptoDetails.allTimeHigh["price"], { precision: 2 })}</p>
                        </span>
                        <span>
                            <TiArrowLoop size={25} />
                            <p>Circulating Supply: {millify(cryptoDetails.supply.circulating)}</p>
                        </span>
                        <span>
                            <MdApproval size={25} />
                            <p>Approved Supply: {checkSupply(cryptoDetails.supply.confirmed)}</p>
                        </span>
                    </div>
                </div>

                <Linechart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} name={cryptoDetails.name} />

                <div className="crypto-details-description">
                    {HTMLReactParser(cryptoDetails.description)}
                </div>
                <div className="crypto-details-links-chart-container">
                    <div className="crypto-details-links">
                        <h2>{cryptoDetails.name} Links:</h2>
                        {cryptoDetails?.links?.map(link => (
                            <div className="crypto-details-link-container" key={link.url}>
                                <p>{link.type}:</p>
                                <a href={link.url} target="_blank">{link.name}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoDetails
