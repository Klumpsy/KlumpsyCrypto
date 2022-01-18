import React from 'react'
import "./linechart.css"
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Linechart = ({ coinHistory, currentPrice, name }) => {

    const coinPrice = [];
    const coinTimeStamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory.data.history[i].price);
        coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
    }

    //Linechart data
    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: 'rgb(103, 119, 114)',
                borderColor: '000000',
                tension: 0.1
            },
        ],
    };

    //Linechart options
    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

    return (
        <div className="line-chart-container">
            <h2>{name} Price Chart</h2>
            <Line data={data} options={options} />
        </div>
    )
}

export default Linechart
